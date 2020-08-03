import { PubSub } from '@google-cloud/pubsub';

const subscriptionName = 'my-sub';

async function run() {
    const pubSubClient = new PubSub({ projectId: 'pubsub-285318' });

    const subscription = pubSubClient.subscription(subscriptionName);

    const messageHandler = (message) => {
      console.log(`Received message ${message.id}:`);
      console.log(`Data: ${message.data}`)

      message.ack();
    };

    subscription.on('message', messageHandler);     

    console.log('🚀 Consumer running on port 3334');
}

run().catch(() => console.log('Error'));
