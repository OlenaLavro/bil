import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB7aeCKbc2cYKRpQqvdHG2iXP14z1S-jmo",
    authDomain: "elephant-ec18f.firebaseapp.com",
    projectId: "elephant-ec18f",
    storageBucket: "elephant-ec18f.appspot.com",
    messagingSenderId: "1058170992420",
    appId: "1:1058170992420:web:78351e644d692847c2e5b1",
    measurementId: "G-8T61N63WNG"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export {app, db, auth}
