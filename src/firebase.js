import firebase from "firebase"



const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyAMQCo5fJzmUzuSH3wa0flK2WO7gmYYwKU",
        authDomain: "messenger-facebook-clone.firebaseapp.com",
        databaseURL: "https://messenger-facebook-clone.firebaseio.com",
        projectId: "messenger-facebook-clone", 
        storageBucket: "messenger-facebook-clone.appspot.com",
        messagingSenderId: "120883626544",
        appId: "1:120883626544:web:de6fdcc9e620d45da823f5",
        measurementId: "G-YQ76QBDHDY"
})

const db =firebaseApp.firestore()

export default  db