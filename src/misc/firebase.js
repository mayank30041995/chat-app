import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyBExMMW5EBEyoN96ZHQlTuiG7v8GGVWQOs',
  authDomain: 'chat-web-app-8c050.firebaseapp.com',
  databaseURL: 'https://chat-web-app-8c050-default-rtdb.firebaseio.com',
  projectId: 'chat-web-app-8c050',
  storageBucket: 'chat-web-app-8c050.appspot.com',
  messagingSenderId: '697554662549',
  appId: '1:697554662549:web:4163667eb646de3badd79c',
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const database = app.database();
