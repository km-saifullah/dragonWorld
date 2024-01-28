import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFR-jA7vXq6PMHFPz9l3-IVFcEPuXbHGQ",
  authDomain: "dragonworld-f6f34.firebaseapp.com",
  projectId: "dragonworld-f6f34",
  storageBucket: "dragonworld-f6f34.appspot.com",
  messagingSenderId: "632832670410",
  appId: "1:632832670410:web:80616ca398228df2c75233",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
