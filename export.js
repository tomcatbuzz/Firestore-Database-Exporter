const firestoreService = require('firestore-export-import');
const firebaseConfig = require('./config.js');
const serviceAccount = require('./serviceAccount.json');
const fs = require('fs-extra');

// Initialize Firebase
const firebase = require('firebase-admin');
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: firebaseConfig.databaseURL,
})

// Firestore to JSON
const firestoreToJson = async () => {
  try {
    console.log('Initialzing Firebase');
    await firestoreService.initializeApp(firebase);
    console.log('Firebase Initialized');

    // Replace 'members' with the collection you need to download to json
    await firestoreService.backup('members').then((data) => {
      const json = JSON.stringify(data);
      fs.writeFile('members.json', json, 'utf8', () => {
        console.log('done');
      })
    });
    console.log('Download Success');
  }
  catch (error) {
    console.log(error);
  }
};

firestoreToJson();