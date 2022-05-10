import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const config = {
    apiKey: "AIzaSyCjoZAzGxFp1o0Pr2vq6UydGZmxCzpHjEA",
    authDomain: "groupproject1-59826.firebaseapp.com",
    projectId: "groupproject1-59826",
    storageBucket: "groupproject1-59826.appspot.com",
    messagingSenderId: "181511430301",
    appId: "1:181511430301:web:b74ef6685badbb0a4ab474",
    };

    firebase.initializeApp(config);

  function getFirebaseRef(refPath){
    
      return firebase.database().ref(refPath);
  }

  let x = {getFirebaseRef:getFirebaseRef};

  export default x;

  