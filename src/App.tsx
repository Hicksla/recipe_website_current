import "./styles.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Adsense } from "@ctrl/react-adsense";
//7w84iOFwGg627o5TIb4g
//recipes.cf4s9ivo8r1h.us-east-1.rds.amazonaws.com

export default function App() {
  const [currentUserName, setCurrentUserName] = useState("");
  const [currentUserUid, setCurrentUserUid] = useState("");
  const [currentUserEmail, setCurrentUserEmail] = useState("");

  const firebaseConfig = {
    apiKey: process.env.FIREBASE_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      setCurrentUserEmail(user.email !== null ? user.email : "");
      setCurrentUserUid(user.uid);
      setCurrentUserName(user.displayName!);
      console.log("Hello, " + currentUserName);
      console.log("Hello, " + currentUserUid);
      console.log("Hello, " + currentUserEmail);
      // ...
    } else {
      // User is signed out
      // ...

      setCurrentUserEmail("");
      setCurrentUserUid("");
      setCurrentUserName("");
      console.log("From Main App: logged out");
      console.log("email: " + currentUserEmail);
    }
  });

  useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    document.title = "My Cookbook";
  });

  const setUser = () => {
    console.log("Hello");
  };

  return (
    <div className="App">
      <Header app={app} email="Hello@mail.com" />
      <MainContent />
      <Adsense
        client="ca-pub-7640562161899788"
        slot="7259870550"
        style={{ display: "block" }}
        layout="in-article"
        format="fluid"
      />
    </div>
  );
}
