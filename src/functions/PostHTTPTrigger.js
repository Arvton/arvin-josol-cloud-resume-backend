const { app } = require('@azure/functions');
const { TableClient } = require('@azure/data-tables');

const tableName = 'Visitors';
const partitionKey = '1';
const rowKey = '1';

app.http('PostHTTPTrigger', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        const connectionString = process.env[COSMOS_TABLE]; // Get the connection string from environment variables
        const tableClient = new TableClient(connectionString, tableName);

        // Retrieve the existing entity
        const entity = await tableClient.getEntity(partitionKey, rowKey);

        // Increment the Count value
        entity.Count = (entity.Count || 0) + 1;

        // Update the entity in the table
        await tableClient.updateEntity(entity, 'Replace');

        return { status: 200 };
    },
});