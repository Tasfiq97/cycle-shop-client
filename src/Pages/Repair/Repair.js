import React from 'react';
import repair from "../../images/bike rapair/sportsandrec-20211123-feature-fg-ebikes-s.webp"

const Repair = () => {
    return (
        <div className='flex justify-between bg-black text-white py-16 px-10'>
            <div>
                <p className='text-orange-500 font-bold mb-5'>Your Ride starts Here</p>
          <h1 className='text-4xl font-extrabold mb-8'>Bike Services and Repair</h1>
          <div className='p-5'>
          <p className='text-xl font-bold '>Tunner - up & Builds</p>
          <p>Vel illum dolore eu feugiat nulla facilisis at vero eros et accu qui blandit</p>
          </div>
          <div  className='p-5'>
          <p className='text-xl font-bold '>Adjust and install</p>
          <p>Vel illum dolore eu feugiat nulla facilisis at vero eros et accu qui blandit</p>
          </div>
          <div  className='p-5'>
          <p className='text-xl font-bold '>Personal Bike Fit</p>
          <p>Vel illum dolore eu feugiat nulla facilisis at vero eros et accu qui blandit</p>
          </div>
            </div>
           
            <div className='w-2/3'>
 <img src={repair} alt="" />
            </div>
        </div>
    );
};

export default Repair;