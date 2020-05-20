import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDsK_7dbmdezcXe4SER5rahrFdnVRC5CTM",
    authDomain: "ticked-off-66a08.firebaseapp.com",
    databaseURL: "https://ticked-off-66a08.firebaseio.com",
    projectId: "ticked-off-66a08",
    storageBucket: "ticked-off-66a08.appspot.com",
    messagingSenderId: "607062696352",
    appId: "1:607062696352:web:76e13959b59c8a8b7ec4c5"
});

export { firebaseConfig as firebase };