import React from 'react';
import kid from "../../images/bike rapair/sportsandrec-20211123-feature-fg-ebikes-s.webp"
import { Link } from 'react-router-dom';
const KidBike = () => {
    return (
        <div className='flex  justify-around items-center mt-32 p-14'>
            <div className=' '>
                <h1 className='text-6xl font-extrabold mb-5 '>Kids Bike</h1>
                <p className='text-xl  font-extralight'>Closeout Prizing bikes</p>
             <Link to="/allProducts" >
             <button className='border-2 border-orange-400 p-3 mt-8 text-2xl font-bold hover:bg-orange-600 ease-in-out duration-300'>Shop now</button></Link>
            </div>
           <div className='ml-28'>
               <img className='w-2/3' src={kid} alt="" />
           </div>
        </div>
    );
};

export default KidBike;