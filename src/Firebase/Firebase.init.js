
import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const firebaseAuthentication=()=>{
    const app = initializeApp(firebaseConfig);
}
export default firebaseAuthentication;