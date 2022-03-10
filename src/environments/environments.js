import firebase from 'firebase/compat/app';
import "firebase/compat/storage"
import "firebase/compat/firestore"

export const environment = {
  //baseUrl: 'http://localhost:8080/rzaraguaza',
  baseUrl: 'https://rzaraguaza-server.herokuapp.com/rzaraguaza',
}

export const app = firebase.initializeApp({
  "projectId": "rzaraguaza-62266",
  "appId": "1:910169574232:web:987a2dad47deff552f732d",
  "storageBucket": "rzaraguaza-62266.appspot.com",
  "locationId": "europe-west",
  "apiKey": "AIzaSyDVJbgUakRf95pfQ490RIZjFucvXDmGsUE",
  "authDomain": "rzaraguaza-62266.firebaseapp.com",
  "messagingSenderId": "910169574232",
  "measurementId": "G-05DNWMCWEL"
});