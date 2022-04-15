import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';

const ShowReviews = () => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{

        axios.get("https://shrouded-lake-15688.herokuapp.com/reviews")
        .then(res=>setReviews(res.data));
    },[])
    return (
        <div className='mt-20 mb-20'>
            <h1 className='text-center p-10 font-extrabold text-orange-400 text-5xl'>See Our Buyers thougts</h1>
            <div className='grid grid-cols-3 '>
             {
                 reviews.map(review=>{
                     return(
                        <div className='p-14 border-2 ml-10 border-orange-400 rounded-lg mt-10 '>
                            <div className='text-center'>
                            <img className='rounded-lg w-48 h-52 text-center' src={review.img} alt="" />
                            </div>
                            <h1 className='text-2xl p-2'>{review.email}</h1>
                            <Rating className=' ml-4 text-orange-500 '
    emptySymbol="far fa-star"
    fullSymbol="fas fa-star "
    initialRating={review.ratings}
   readonly
   ></Rating>
                            <p className='py-10 text-xl text-gray-400'>{review.description}</p>
                        </div>
                     )
                 })
             }
            </div>
        </div>
    );
};

export default ShowReviews;