import React from 'react';
import { Link } from 'react-router-dom';

import banner from "../../../images/banner/Roadeo_Hardtail_Riot_DD_Black_2017_04.png"
const Banner = () => {
    return (
        <div className='flex items-center p-10 bg-black text-white '>
            <div className='px-5'>
                <p className='text-xl text-orange-500 leading-6 px-5'>ROAD RANGE 2022</p>
           <h1 className='text-6xl mt-5 px-5'>Vanquish comb Carbon</h1>
           <p className='px-5 py-3 text-2xl font-bold text-orange-500'>115.9 $</p>
           <p className='px-4'>high modulas carbon from produces aerodynamics efficiency through the use of kommtail shaped tubes</p>
          <Link to="/allProducts"> <button className='text-2xl p-5 bg-orange-500 mt-5 text-black mr-5 font-bold'>Shop now</button> </Link>
          <Link to="/allProducts"> <button className='text-2xl p-5 bg-orange-500 mt-5 text-black font-bold'>Explore Products</button></Link>
            </div>
            <div className='mb-20'>
        <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;