# Firestore Database Exporter

This is a simple and tested nodejs app for export a Firestore Collection into a JSON file.

## Credits 
- Utilizing this wonderful package https://github.com/dalenguyen/firestore-backup-restore this code is possible. Dalenguyen deserves credits for his work. The Github documentation there is great and they give a few other scenarios for data movement. 

## Recommended Setup

- Clone the repo and run npm install to install dependencies
- Assuming you already have a Firebase Account and Project, you will need your serviceAccount.json file.
- I don't think you need your basic Firebase credentials to put in the config.js for the database url or projectID because the serviceAccount should contain the necessary data. 
- You will need your collection name that needs to be exported. Read the comments in export.js for replacing your collection name <--what ever name you have for your collection. 

## Important
- NOTE: I have placed a .gitignore here already, but always ensure you protect your serviceAccount.json keys before uploading code to Github or other Repositories.

## Running the app
I have a start script included in the package.json. Or you can run "node export.js" in your terminal. The console logs will show initialization and progress. Check your project folder for the new JSON file from exporting. 

## Special attention
- Make sure you read your Firebase documentation in regards to Firestore Database charges for data read and writes. The limits are very high but you don't want to be surprised. 

## Happy Coding
- Hope this helps if needed in a pinch or use it as a an example and rebuild your own.