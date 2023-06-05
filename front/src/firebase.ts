import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_O8EdmOztQR-VhKp7YkAdCrLvdZYWvoA",
  authDomain: "corta-ai-780a5.firebaseapp.com",
  projectId: "corta-ai-780a5",
  storageBucket: "corta-ai-780a5.appspot.com",
  messagingSenderId: "814723916009",
  appId: "1:814723916009:web:09c31a5eca0848267d9078",
  measurementId: "G-04LEXLPNPS",
};

// Inicializa o app do Firebase
export const app = initializeApp(firebaseConfig);

// Obtém a instância do Firestore
export const db = getFirestore(app);
