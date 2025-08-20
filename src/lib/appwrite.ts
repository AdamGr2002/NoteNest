import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('68a5d661000762977839'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
