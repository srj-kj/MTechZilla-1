import { firestore } from 'firebase-admin';
import admin from 'firebase-admin';
import config from './serviceAccount';

admin.initializeApp({
  credential: admin.credential.cert(config),
});

const db = firestore();
const adminauth = admin.auth();

export { db, adminauth };
