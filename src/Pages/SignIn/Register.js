import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';

import Header from '../Home/Header/Header';

const Register = () => {
    const {user,signUpGoogle}=useFirebase();
    const {registerUser,isloading,error}=useAuth()
    const location=useLocation()
    const navigate=useNavigate();
const handleSignin=()=>{
    signUpGoogle();
}
const [loginData,setLoginData]=useState({})
    const handleOnchange=(e)=>{
        const field=e.target.name;
        const value=e.target.value;
        const newLoginData={...loginData}
    newLoginData[field]=value;
    console.log(newLoginData);
    setLoginData(newLoginData)
    }
    const handleLogin=(e)=>{
        
        if(loginData.password!==loginData.password2){
            alert("Your password didn't match")
            return;
        }
        registerUser(loginData.email,loginData.password,location,navigate)
        e.preventDefault();
    
    }
    return (
        <div>
          <div className='flex justify-center bg-black' >
          <div className=' mt-16 border-4 border-orange-400 p-20 w-2/3 mb-20 text-center' >
          <h1 className='text-4xl text-orange-500 py-10 font-bold' > Register Here</h1>
          
          {
        user?.email && <p className='text-white bg-green-500 text-xl mb-5 w-/2-3 p-3'> successFully Registered !!</p>
    }
    {
        error &&  <p className='text-white text-xl mb-5 w-3/3 text-center p-3'> {error}</p>
    }
         { !isloading && <form onSubmit={handleLogin}>
          <input name='email' onChange={handleOnchange} className='text-xl text-white bg-gray-800 mb-8 py-2 px-2 w-2/3' type="email" placeholder='Enter Email'  /><br />
          <input name='password' onChange={handleOnchange} className='text-xl text-white bg-gray-800 mb-8 py-2 px-2 w-2/3' type="password" placeholder='Enter password'  /><br />
          <input name='password2' onChange={handleOnchange} className='text-xl text-white bg-gray-800 mb-8 py-2 px-2 w-2/3' type="password" placeholder='Re-enter password'  /><br />
          <button className='border-2 w-2/3 border-orange-400 p-3 mt-8 text-2xl font-bold hover:bg-orange-600 ease-in-out duration-300  text-white'>Sign Up</button>
        </form>}
        {isloading && <div className='text-white p-5 text-2xl'>
        <p className='text-orange-400 font-bold'>Processing <span className='text-5xl animate-ping'>.....</span></p>
    </div> }
   
    
          <p className='text-3xl text-white p-4 mt-5 font-bold'>----Or----</p>
     <button className= ' border-2 border-orange-400 w-2/3 p-3 mt-8 text-2xl font-bold hover:bg-orange-600 ease-in-out duration-300  text-white' onClick={handleSignin}>Google Sign in</button>
    
          <div>
             

          </div>
          </div>
          </div>
        </div>
    );
};

export default Register;