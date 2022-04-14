
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthentication from "../Firebase/Firebase.init";
import axios from 'axios';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

firebaseAuthentication()
const useFirebase=()=>{
    const auth = getAuth();
    const  [user,setUser]=useState({}); 
    const [isloading,setIsloading]=useState(true)
    const [error,setError]=useState("")
    const [admin,setAdmin]=useState(false)
    

    // email ,password 
    const registerUser=(email,password,location,navigate)=>{
        setIsloading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setError("")
         const destination= location?.state?.from || "/"
  navigate(destination);
           
           saveUser(email)
         
          })
          .catch((error) => {
            const errorCode = error.code;
           setError(error.message)
            // ..
          })
          .finally(()=>setIsloading(false))
    }

    const loginUser=(email,password,location,navigate)=>{
        setIsloading(true)
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const destination= location.state?.from || "/"
    navigate(destination);
    setError(" ")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
   setError(error.message)
  }).finally(()=>setIsloading(false))
    }
const signUpGoogle=()=>{
    const googleProvider = new GoogleAuthProvider();
   
   signInWithPopup(auth, googleProvider)
   .then((result) => {
    const user = result.user;
   googleUser(user.email);
  })
}

useEffect(()=>{
    const subscribed=onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsloading(false)
        })
        
        return subscribed;
    },[])

    useEffect(()=>{
        fetch(`https://shrouded-lake-15688.herokuapp.com/users/${user.email}`)
        .then(res=>res.json())
        .then(data=>setAdmin(data.admin));
    },[user.email])


const logout=()=>{
    setIsloading(true);
 signOut(auth).then(()=>{
     setUser({})
 })
 .finally(()=>setIsloading(false))
}

const saveUser=(email)=>{
 const user={email};
 axios.post("https://shrouded-lake-15688.herokuapp.com/users",user)  
 .then()

}

const googleUser=(email)=>{
    const user={email};
    fetch("https://shrouded-lake-15688.herokuapp.com/users",{
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(user)

    })
    .then()
}

    return {
        user,
        signUpGoogle,
        registerUser,
        loginUser,
        isloading,
        error,
        admin,
        logout


    }

}
    
export default useFirebase;