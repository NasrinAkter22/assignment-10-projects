import { getAuth } from "firebase/auth"


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDFLO1VZ9NcSNzujglUytLSH1bzIi1UKGI",
  authDomain: "assignment-10-projects.firebaseapp.com",
  projectId: "assignment-10-projects",
  storageBucket: "assignment-10-projects.appspot.com",
  messagingSenderId: "539137199031",
  appId: "1:539137199031:web:28f66886981079f37d3632"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth