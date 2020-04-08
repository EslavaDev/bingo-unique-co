import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';
import {router} from './routes'

var serviceAccount = require("./config/env.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://bingo-unique-co.firebaseio.com"
});
admin.firestore().settings({ timestampsInSnapshots: true })

const app = express();
app.use(express.json());

// CORS handling
app.use(cors());

router(app);

export const bingoUnique = functions.https.onRequest(app);