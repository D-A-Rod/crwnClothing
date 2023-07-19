import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnLPrlwNAhzcPVlMr5WayNQzhGGZBzods",
  authDomain: "crown-clothing-db-e6d26.firebaseapp.com",
  projectId: "crown-clothing-db-e6d26",
  storageBucket: "crown-clothing-db-e6d26.appspot.com",
  messagingSenderId: "1082874466632",
  appId: "1:1082874466632:web:70976759cc804eb02e237d",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  console.log("userSnapShot: ", userSnapShot);
  console.log("Exists ", userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error);
    }
  }

  return userDocRef;
  //check if user data exist

  //is user data doesnt exist, create

  //return userdoc refernce
};
