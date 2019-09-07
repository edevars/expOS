import firebase from 'firebase/app'
import auth from 'firebase/auth'

export default AuthUser = () => {
    const firebaseConfig = {
        apiKey: procees.env.FIREBASE_API_KEY,
        authDomain: procees.env.FIREBASE_AUTH_DOMAIN,
        databaseURL: procees.env.FIREBASE_DATA_URL,
        projectId: procees.env.FIREBASE_PROJECT_ID,
        storageBucket: procees.env.FIREBASE_STORAGE_BUCCKET,
        messagingSenderId: procees.env.FIREBASE_MESSAGINF_SENDER_ID,
        appId: procees.env.FIREBASE_APP_ID,
      };
    
      firebase.initializeApp(firebaseConfig)
      return firebase
}

