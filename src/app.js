// FIREBASE DATA

import { 
    initializeApp 
} from "firebase/app";

import { 
    getAnalytics 
} from "firebase/analytics";

import { 
    getDatabase, ref, set, onValue, get
} from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyA4fSZkRgf1WdPT8IAZSDXqg9SlJ7v5E7U",
    authDomain: "baileo-us.firebaseapp.com",
    databaseURL: "https://baileo-us-default-rtdb.firebaseio.com",
    projectId: "baileo-us",
    storageBucket: "baileo-us.appspot.com",
    messagingSenderId: "338186023824",
    appId: "1:338186023824:web:6f2fb96c7a67ff0762b915",
    measurementId: "G-Y60XJC7GR8"
};

// Firebase Constants
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

// Configure Project
const projectTitle = 'scaffold';
const projectRef = 'services/' + projectTitle + '/';

// Empty Database Variables
var db;
var pdb;

// ---

function writeData(path, value) {
    set(ref(database, path), value);
}

function writeProjData(path, value) {
    set(ref(database, projectRef + path), value);
}

onValue(ref(database), (snapshot) => {
    // Baileo Database
    db = snapshot.val();

    // Project Database
    pdb = snapshot.val()['services'][projectTitle];

    writeProjData('is working','yes');
}, {
    onlyOnce: true
});