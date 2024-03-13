const { app, output } = require('@azure/functions');

const tableOutput = output.table({
    tableName: 'Visitors',
    connection: 'COSMOS_TABLE',
});

app.http('PostHTTPTrigger', {
    methods: ['POST'],
    authLevel: 'anonymous',
    extraOutputs: [tableOutput],
    handler: async (request, context) => {
        const rows = [];
        const { PartitionKey, RowKey, Name } = request.body;
        for (let i = 1; i < 10; i++) {
            rows.push({
                PartitionKey,
                RowKey: RowKey + i.toString(),
                Name: Name + ` ${i}`,
            });
        }
        context.extraOutputs.set(tableOutput, rows);
        return { status: 201 };
    },
});