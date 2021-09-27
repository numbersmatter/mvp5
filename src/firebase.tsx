// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';



const firebaseConfig = {
  apiKey: "AIzaSyAmx2YFYy6e1tgBgW9gsbyjRudidRgKvfk",
  authDomain: "art-market-production.firebaseapp.com",
  projectId: "art-market-production",
  storageBucket: "art-market-production.appspot.com",
  messagingSenderId: "295051557281",
  appId: "1:295051557281:web:7e6a6a88345eba27cf33e0",
  measurementId: "G-NWFW97W8JC"
};


// initialize Firebase
if (!firebase.apps.length) 
{
    firebase.initializeApp(firebaseConfig);
}
else 
{
    firebase.app(); // if already initialized, use this one
}

export const auth = firebase.auth()
export const db = firebase.firestore();
export default firebase

export const storage = firebase.storage();

export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;

export const arrayUnion=(data: any) =>{
  return firebase.firestore.FieldValue.arrayUnion(data);
}

export const deleteField = () =>{
  return firebase.firestore.FieldValue.delete();
};

// not working as expected may be only a server function
export const timestampToDate = firebase.firestore.FieldValue.serverTimestamp;