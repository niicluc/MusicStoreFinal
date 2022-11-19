import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyCcZBwPCUkaTrp8nEqYrFneysHybNZQP5g",
  authDomain: "music-store-b8928.firebaseapp.com",
  projectId: "music-store-b8928",
  storageBucket: "music-store-b8928.appspot.com",
  messagingSenderId: "313303450535",
  appId: "1:313303450535:web:d9b0775541278b05fd6c82"
});

export const db=getFirestore(firebaseConfig)
