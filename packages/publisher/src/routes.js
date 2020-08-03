import express from 'express';
import { PubSub } from '@google-cloud/pubsub';

const routes = express.Router();


routes.post('/', async (request, response) => {
    const topicName = 'my-topic';
    const data = JSON.stringify({ foo: 'bar' });

    const pubSubClient = new PubSub({ projectId: 'pubsub-285318' });

    const dataBuffer = Buffer.from(data);

    const messageId = await pubSubClient.topic(topicName).publish(dataBuffer);
    console.log(`Message ${messageId} published.`);

    return response.send('Hello World');
});


export default routes;