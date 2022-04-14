import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';

const Products = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch("https://shrouded-lake-15688.herokuapp.com/products")
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[])
    const shortProducts=products.splice(0,6)
    // console.log(shortProducts);
    return (
        <div >
            <h1 className='text-center text-5xl font-semibold'>Best Products</h1>
        <div className='grid grid-cols-3 mb-20 p-7'>
        {
            shortProducts.map(product=><SingleProduct
            key={product.id}
            product={product}
            >

            </SingleProduct>)
        }
        </div>
        </div>
    );
};

export default Products;