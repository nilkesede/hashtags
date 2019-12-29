# Hubtec Tasks [![Build Status](https://img.shields.io/travis/com/nilkesede/hubtec-tasks?style=for-the-badge)](https://travis-ci.com/nilkesede/hubtec-tasks)

I've chosen to use Next.JS as front-end framework, with an NodeJS backend wired to the Firebase Firestore service.
The NextJS has a whole bunch of nice features out of the box like server-side rendering, prefetching, automatic code splitting etc. Firestore is a secure NoSQL database in the cloud with realtime data update.

### Set up firebase:
- Create a project at the [Firebase console](https://console.firebase.google.com/).
- Get your account credentials from the Firebase console at _project settings>service accounts_, where you can click on _generate new private key_ and download the credentials as a json file. It will contain keys such as `project_id`, `client_email` and `client_id`. Now copy them into your project in the `credentials/server.js` file.
- Get your authentication credentials from the Firebase console under _project settings>general>your apps_ Add a new web app if you don't already have one. Under _Firebase SDK snippet_ choose _Config_ to get the configuration as JSON. It will include keys like `apiKey`, `authDomain` and `databaseUrl` and it goes into your project in `credentials/client.js`.
- Back at the Firebase web console, go to _Authentication>Sign-in method_ and enable _Email/Password_.
- Create a database in the "Database" tab and select Firestore. Then go to "rules" and set up your write, read rules to this:

```
// Allow read/write access on all documents to any user signed in to the application
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth.uid != null;
    }
  }
}
```

### Install it and run:
```bash
npm install
npm run dev
# or
yarn
yarn dev
```

### License
MIT © [Nil Késede](https://nilkesede.mit-license.org/)
