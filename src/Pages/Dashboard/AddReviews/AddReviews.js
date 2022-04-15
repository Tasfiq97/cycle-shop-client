import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import swal from 'sweetalert';


const AddReviews = () => {
    const {user}=useAuth()
    const [reviews,setReviews]=useState({})
    const handleOnchange=(e)=>{
          const field= e.target.name;
          const value=e.target.value;
          const newData={...reviews};
          newData[field]=value;
          console.log(newData);
          setReviews(newData);
    }
    const handleReview=(e)=>{
        e.preventDefault();
        const email=user.email
        const newReviews={...reviews,email}
        console.log(newReviews);
        axios.post("https://shrouded-lake-15688.herokuapp.com/reviews",newReviews)
        .then(result=>{
            if(result.data.acknowledged){
                swal("Nice", "Review is Taken", "success");
            }
        })
    }
    return (
        <div className=''>
            <h1 className='text-center font-bold text-3xl'>Tell us Your thoughts</h1>
            <form className='text-center mt-20' onSubmit={handleReview}>
          <input  name='email' onChange={handleOnchange} className='text-xl text-white bg-gray-800 mb-8 py-3 px-2 w-2/3' type="email"value={user.email} disabled  /><br />
          <input required name='img' onChange={handleOnchange} className='text-xl text-white bg-gray-800 mb-8 py-3 px-2 w-2/3' type="text" placeholder='image'  /><br />
          <textarea required name='description' onChange={handleOnchange} className='text-xl text-white bg-gray-800 mb-4 py-4 px-5 w-2/3' rows="5" type="text" placeholder='Your thoughts' /><br />
          <input required name='ratings' onChange={handleOnchange} className='text-xl text-white bg-gray-800 mb-8 py-3 px-2 w-2/3' type="number" placeholder='rate us'  /><br />
          <button required className='border-2 w-2/3 text-black border-orange-400 p-3  text-2xl font-bold hover:bg-orange-600 ease-in-out duration-300 mb-20  text-white'>Rate us</button>
            </form>
        </div>
    );
};

export default AddReviews;