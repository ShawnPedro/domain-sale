import { Client, Databases, ID } from 'appwrite';

const client = new Client();

client
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT || 'https://fra.cloud.appwrite.io/v1')
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID || '69875bf2001d674d42e8');

export const databases = new Databases(client);
export const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID || '69875c6b0017c6b4cf53';
export const ORDERS_COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID || 'orders';
export { ID };