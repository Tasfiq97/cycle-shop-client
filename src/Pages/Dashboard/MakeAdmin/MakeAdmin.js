import axios from 'axios';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email,setEmail]=useState("");
    const handleOnBlur=e=>{
          setEmail(e.target.value)
    }
    const handleSubmit=(e)=>{
        const user={email};
        e.preventDefault();
        axios.put("https://shrouded-lake-15688.herokuapp.com/users/admin",user)
        .then(result=>{
            if(result.data.acknowledged){
                alert("admin created successfully");
               
            }
            else{
                alert("error occurred")
            }
           
        });

    }
    return (
        <div className='h-screen text-center'>
            <h1 className='text-center text-4xl font-bold mb-10 p-5'>Make Admin</h1>
            <form onSubmit={handleSubmit}>
            <input name='email' onBlur={handleOnBlur} className='text-xl text-white bg-gray-800 mb-8 py-3 px-2 w-2/3' type="email" placeholder='Enter Email'  /><br />
                <button className= ' border-2 border-orange-400 w-2/3 p-3 mt-2 text-2xl font-bold hover:bg-orange-600 ease-in-out duration-300  text-balck' type='submit'>Make admin</button>
            </form>
        </div>
    );
};

export default MakeAdmin;