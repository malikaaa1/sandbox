import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyA4VMap7zF1m9yXdXlr32Vjz8R6_mTVvdM",
    authDomain: "electronic-equipment-store.firebaseapp.com",
    projectId: "electronic-equipment-store",
    storageBucket: "electronic-equipment-store.appspot.com",
    messagingSenderId: "172193121330",
    appId: "1:172193121330:web:3853725a90e97d351be82b"
  };
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire; 