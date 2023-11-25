import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC8ZmfR8E8yLYs1Pk87uyycIpDqsLvNhJo",
  authDomain: "stags-links.firebaseapp.com",
  projectId: "stags-links",
  storageBucket: "stags-links.appspot.com",
  messagingSenderId: "604630909644",
  appId: "1:604630909644:web:ea17eb4e42a8c039a93869"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const linksCollection = collection(db,'links')