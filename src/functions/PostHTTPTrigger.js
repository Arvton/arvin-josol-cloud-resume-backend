const { app } = require('@azure/functions');
const { TableClient, AzureNamedKeyCredential } = require('@azure/data-tables');

const tableName = 'Visitors';
const partitionKey = '1';
const rowKey = '1';

const account = process.env['COSMOS_ACCOUNT']; // Get the account name from environment variables
const accountKey = process.env['COSMOS_ACCOUNT_KEY']; // Get the account key from environment variables

const sharedKeyCredential = new AzureNamedKeyCredential(account, accountKey);
const tableClient = new TableClient(`https://${account}.table.cosmos.azure.com:443/`, tableName, sharedKeyCredential);

app.http('PostHTTPTrigger', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        // Retrieve the existing entity
        const entity = await tableClient.getEntity(partitionKey, rowKey);

        // Remove the 'odata.metadata' property
        delete entity['odata.metadata'];

        // Increment the Count value
        entity.Count = (entity.Count || 0) + 1;

        // Update the entity in the table
        await tableClient.updateEntity(entity, 'Replace');

        // Set the HTTP response
        context.res = {
            status: 200,
            body: JSON.stringify({ Count: entity.Count }),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        // Return the HTTP response
        return context.res;
    },
});