import * as firebase from 'firebase/app'
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyDyFLyErE_jEBl9ncmF0FJBZQkGTaODdRs",
    authDomain: "pedidos-6eb90.firebaseapp.com",
    databaseURL: "https://pedidos-6eb90.firebaseio.com",
    projectId: "pedidos-6eb90",
    storageBucket: "pedidos-6eb90.appspot.com",
    messagingSenderId: "510183910513",
    appId: "1:510183910513:web:24560e1481d16edbab3fd0",
    measurementId: "G-VW0X199GKC"
})

export default app