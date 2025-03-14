import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyBmexkS3rHfjYVLa22YsqdC2ijeWEPbqts",
    authDomain: "e-commerce-musicalhouse.firebaseapp.com",
    projectId: "e-commerce-musicalhouse",
    storageBucket: "e-commerce-musicalhouse.firebasestorage.app",
    messagingSenderId: "682260382624",
    appId: "1:682260382624:web:e8ca31e710787376b8dac5",
    measurementId: "G-6R940K9G4M"
  }

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
