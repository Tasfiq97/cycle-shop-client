
import React, { useState } from 'react';
import { Link, useLocation, useNavigate, useNavigationType } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const [loginData,setLoginData]=useState({})
    const {user,error,loginUser,isloading}=useAuth();
    const location=useLocation();
    const navigate=useNavigate();
    const handleOnchange=(e)=>{
        const field=e.target.name;
        const value=e.target.value;
        const newLoginData={...loginData}
    newLoginData[field]=value;
    setLoginData(newLoginData)
    }
    const handleLogin=(e)=>{
       
    loginUser(loginData.email,loginData.password,location,navigate);
    e.preventDefault()
    
    }
    return (
        <div>
          <div className='flex justify-center bg-black' >
          <div className=' mt-16 border-4 border-orange-400 p-20 w-2/3 mb-20 text-center' >
          <h1 className='text-4xl text-orange-500 py-10 font-bold' > Login Here</h1>
          {
        user?.email && <p className='text-white bg-green-500 text-xl mb-5 w-/2-3 p-3'> successFully logged in!!</p>
    }
    {
        error && <p className='text-white text-xl mb-5 w-3/3 text-center p-3'> {error}</p>
    }
             {!isloading &&<form onSubmit={handleLogin}>
          <input name='email' onChange={handleOnchange} className='text-xl text-white bg-gray-800 mb-8 py-2 px-2 w-2/3' type="email" placeholder='Enter Email'  /><br />
          <input name='password' onChange={handleOnchange} className='text-xl text-white bg-gray-800 mb-8 py-2 px-2 w-2/3' type="password" placeholder='Enter password'  /><br />
          <button className='border-2 w-2/3 border-orange-400 p-3 mt-8 text-2xl font-bold hover:bg-orange-600 ease-in-out duration-300  text-white'>Log in</button>
        </form>}
        {isloading && <div className='text-white p-5 text-2xl'>
        <p className='text-orange-400 font-bold'>Processing <span className='text-5xl animate-ping'>.....</span></p>
    </div> }
     <Link to="/register">
     <button className='border-2 w-2/3 border-orange-400 p-3 mt-8 text-2xl font-bold bg-orange-600 ease-in-out duration-300  text-white'>New User? Register here</button></Link>
          </div>
          </div>
       
        </div>
    );
};

export default Login;