const admin = require('firebase-admin');
const serviceAccount = require('../report-system-5757a-firebase-adminsdk-ew8ru-6f4a6069e8.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.FIREBASE_BUCKET_URL
});

const bucket = admin.storage().bucket();

module.exports = { bucket };
