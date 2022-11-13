import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBeN-uM6Odo-eBKnCRYOWXLe7SK_gjDLB8",
    authDomain: "customassure.firebaseapp.com",
    projectId: "customassure",
    storageBucket: "customassure.appspot.com",
    messagingSenderId: "160712249278",
    appId: "1:160712249278:web:3fec257db2880be63eb3ef"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);