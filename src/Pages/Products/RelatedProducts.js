import React from 'react';
import { useNavigate } from 'react-router-dom';

const RelatedProducts = ({data}) => {
    const {name,img,price,_id}=data;
    const navigate=useNavigate();
    const handleRoute=(id)=>{
navigate(`/product/${id}`);}
    return (
        <div className='p-4 mt-20 mb-20'>
            <img onClick={()=>handleRoute(_id)} className='bg-gray-100 p-5 h-80 cursor-pointer hover:scale-105
            ease-in duration-300 ' src={img} alt="" />
             <h1 className='text-center font-bold text-2xl py-5 '>{name}</h1>
             <p className='text-center text-2xl mt-2 text-orange-600 font-bold'>${price}</p>
        </div>
    );
};

export default RelatedProducts;