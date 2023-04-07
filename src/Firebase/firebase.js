import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC5DmAfEiPNFyE8zRy1MkMfmfyObphmyH8",
  authDomain: "battle-game-63b36.firebaseapp.com",
  projectId: "battle-game-63b36",
  storageBucket: "battle-game-63b36.appspot.com",
  messagingSenderId: "842938225835",
  appId: "1:842938225835:web:26fb7787ca5a74d9fa93ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

const auth = getAuth();

export { app, auth, firestore};