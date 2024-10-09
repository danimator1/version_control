const { SQSClient, SendMessageCommand } = require('@aws-sdk/client-sqs')


const sqsClient = new SQSClient({ region: 'us-east-1' })
const queueUrl = 'https://sqs.us-east-1.amazonaws.com/148761675660/dMessaging'

async function sendMessage(message) {
    const params = {
        MessageBody: JSON.stringify(message),
        QueueUrl: queueUrl,
    }

    try {
        const data = await sqsClient.send(new SendMessageCommand(params))
        console.log('Successfully sent message to SQS:', data.MessageId)
    } catch (err) {
        console.error('Error sending message to SQS:', err)
    }
}


sendMessage({ text: 'New user activity queued' })
