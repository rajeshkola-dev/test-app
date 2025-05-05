import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4yAxrfFlA_8Endfh9Z5XZGEh806DONoQ",
  authDomain: "rajesh-6ca57.firebaseapp.com",
  projectId: "rajesh-6ca57",
  storageBucket: "rajesh-6ca57.firebasestorage.app",
  messagingSenderId: "179177640130",
  appId: "1:179177640130:web:36e95b03966911ce2aeb5b",
  measurementId: "G-D8PSX77V51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

