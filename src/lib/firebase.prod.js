import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import { seedDatabase } from '../seed';


const config = {
    apiKey: "AIzaSyAUaN4qxxlFNnkpjHErsfXR5mmCS5b_-VA",
    authDomain: "netflix-clone-c3de7.firebaseapp.com",
    databaseURL: "https://netflix-clone-c3de7.firebaseio.com",
    projectId: "netflix-clone-c3de7",
    storageBucket: "netflix-clone-c3de7.appspot.com",
    messagingSenderId: "1082735246188",
    appId: "1:1082735246188:web:8b451d5de8ecb11b0e9149",
    measurementId: "G-LB4DZYRKF0"
}

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase };