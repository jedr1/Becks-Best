// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAF4G-5LI7h92KCH4OlGjjYQTRJUjdqiys',
  authDomain: 'becks-best.firebaseapp.com',
  projectId: 'becks-best',
  storageBucket: 'becks-best.appspot.com',
  messagingSenderId: '730166455126',
  appId: '1:730166455126:web:d2f22ac26bef8d897e44f7',
  measurementId: 'G-1VFDJ0C62B',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
