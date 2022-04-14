import { faDeleteLeft, faDumpster, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const DashbaordProduct = ({data}) => {
    const {name,img,price,quantity,_id,onDelete}=data;
    
   
    return (
        <div className='flex justify-between py-10 px-8 mb-10 items-center border-4 border-orange-300'>
            <img className='w-24' src={img} alt="" />
            <h1 className='text-xl font-bold'>{name}</h1>
            <p className='text-xl text-orange-500 font-bold'>{price} $</p>
            <p>quantity: {quantity}</p>
            <button className='  border-2 border-orange-400 p-2 mt-8 text-2xl font-bold hover:bg-orange-600 ease-in-out duration-300  text-black'><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>

        </div>
    );
};

export default DashbaordProduct;