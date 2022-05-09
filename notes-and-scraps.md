Firebase SDK code for later:

<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCjoZAzGxFp1o0Pr2vq6UydGZmxCzpHjEA",
    authDomain: "groupproject1-59826.firebaseapp.com",
    projectId: "groupproject1-59826",
    storageBucket: "groupproject1-59826.appspot.com",
    messagingSenderId: "181511430301",
    appId: "1:181511430301:web:b74ef6685badbb0a4ab474",
    measurementId: "G-FEX16PS9FK"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>