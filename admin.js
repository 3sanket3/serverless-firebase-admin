var admin = require("firebase-admin");

const getAdminApp = () => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
      databaseURL: "https://quiz-311b9.firebaseio.com"
    });
  }
  return admin.app();
};

module.exports = getAdminApp;
