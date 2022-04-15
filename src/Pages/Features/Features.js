import React from 'react';
import feat1 from "../../images/featured/john-nzoka-n0iClJpvmPQ-unsplash.jpg"
import feat2 from "../../images/featured/viktor-bystrov-dpfp1k2OSKk-unsplash.jpg"
import feat3 from "../../images/kid bikes/kbo-bike-7AGfUBMEoQc-unsplash.jpg"
const Features = () => {
    return (
        <div className='flex bg-black '>
            <div>
        <img   className='rounded-lg  ' src={feat1} alt="" />
       <h1 className='text-4xl font-bold text-orange-500 p-5'style={{marginTop:"-200px"}}>Singletrack speed</h1>
       <p className='text-xl font-bold text-white p-5'style={{marginTop:"-10px"}}>new bikes</p>
            </div>
            <div>
            <img className='rounded-lg' src={feat2} alt="" />
            <h1 className='text-4xl font-bold text-orange-500 p-5'style={{marginTop:"-200px"}}>Trail Power</h1>
            <p className='text-xl font-bold text-white p-5'style={{marginTop:"-10px"}}>new bikes</p>
            </div>
            
        </div>
    );
};

export default Features;