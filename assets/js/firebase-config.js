  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyC8NaVcJqhBYCq4atRkjWeGwuTSBTwEkSU",
    authDomain: "smart-city-2777c.firebaseapp.com",
    projectId: "smart-city-2777c",
    storageBucket: "smart-city-2777c.firebasestorage.app",
    messagingSenderId: "642674976053",
    appId: "1:642674976053:web:3855eb6af6e3767860187c"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  export { app, auth, db }