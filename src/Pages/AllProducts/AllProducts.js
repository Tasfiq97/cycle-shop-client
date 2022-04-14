import React, { useEffect, useState } from 'react';
import SingleAll from './SingleAll';

const AllProducts = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch("https://shrouded-lake-15688.herokuapp.com/products")
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[])
    return (
        <div>
            <h1 className='text-5xl text-center font-bold mt-20 mb-10'> Our Products</h1>
          <div className='grid grid-cols-3'>
          {
                products.map(product=><SingleAll
                key={product.id}
                product={product}
                >

                </SingleAll>)
            }
          </div>
        </div>
    );
};

export default AllProducts;