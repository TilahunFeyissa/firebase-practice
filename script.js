// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import { getFirestore,addDoc,doc,collection,setDoc,getDoc,getDocs,query } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDix_taKVttP1RN7yZWD1OOOFHdupoBcik",
    authDomain: "fir-practice-javascript.firebaseapp.com",
    projectId: "fir-practice-javascript",
    storageBucket: "fir-practice-javascript.appspot.com",
    messagingSenderId: "180044566458",
    appId: "1:180044566458:web:6bc7a9b3e6365f4e095783",
    measurementId: "G-V85Q7ETVN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

submitdata.addEventListener('click',(e)=>{
    var fname=document.getElementById('fname').value;
    var lname=document.getElementById('lname').value;
    var email=document.getElementById('email').value;
    addDoc(collection(db, "students",id), {
        fname:fname,
        lname:lname,
        email:email
        
        });
        alert("student data recorded")

})










   


