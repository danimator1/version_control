const { KinesisClient, PutRecordCommand } = require('@aws-sdk/client-kinesis')

const kinesisClient = new KinesisClient({ region: 'us-east-1' })

async function putRecord() {
    const params = {
        Data: JSON.stringify({ message: 'New user activity data' }),
        PartitionKey: '1',
        StreamName: 'MyDataStream',
    }

    try {
        const data = await kinesisClient.send(new PutRecordCommand(params))
        console.log('Successfully put record to Kinesis:', data)
    } catch (err) {
        console.error('Error putting record to Kinesis:', err)
    }
}


putRecord()
