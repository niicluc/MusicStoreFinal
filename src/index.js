import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

const firebaseConfig = {
  apiKey: "AIzaSyCcZBwPCUkaTrp8nEqYrFneysHybNZQP5g",
  authDomain: "music-store-b8928.firebaseapp.com",
  projectId: "music-store-b8928",
  storageBucket: "music-store-b8928.appspot.com",
  messagingSenderId: "313303450535",
  appId: "1:313303450535:web:d9b0775541278b05fd6c82"
};

initializeApp(firebaseConfig);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
