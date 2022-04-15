import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import ReactStars from 'react-rating-stars-component';
import { useParams } from 'react-router-dom';
import RelatedProducts from './RelatedProducts';
import useAuth from "../../Hooks/useAuth"
import axios from 'axios';
import swal from 'sweetalert';


const ProductDetails = () => {
    const {productId}=useParams();
    const {user}=useAuth()
    const [product,setProduct]=useState([]);
    useEffect(()=>{
        fetch("https://shrouded-lake-15688.herokuapp.com/products")
        .then(res=>res.json())
        .then(data=>setProduct(data));
    },[product])

    const findData=product.find(pd=>pd._id==productId)|| {}
    
    const {name,img,ratings,price,description,_id,quantity}=findData;
   const relatedData= product.filter(pd=>pd._id!=productId) ||{}
   const datas=relatedData.splice(0,4);
   
   const handleCart=()=>{
       const orderedObj={}
       orderedObj.email=user.email
       orderedObj.product=findData;
       axios.post("https://shrouded-lake-15688.herokuapp.com/cart",orderedObj)
       .then(result=>{
           if(result.data.insertedId){
            //    console.log(result.data)
            swal({
                title: "Great",
                text: "Product is added",
                icon: "success",
                button: "close",
              });
           }
       })
   }

    return (
        <div className=''>
        <div className='flex mt-28'>
            <div className='w-2/3 p-5'> 
   <img src={img} alt="" />
            </div>
            <div className='mt-20 p-6'>
      <h1 className='text-3xl font-bold '>{name}</h1>
    
   <Rating className=' mt-3 text-orange-500 '
    emptySymbol="far fa-star"
    fullSymbol="fas fa-star "
    initialRating={ratings}
   readonly
   >
   </Rating>
   <span className='texl-xl ml-5 text-gray-500'>100+ peoples rated</span>
      <p className='py-5 text-gray-500'>{description}</p>
      <p className='py-5  text-orange-500 text-2xl font-bold'>{price} $</p>
      {/* <div className=' w-44 text-center mt-10 mb-10'>
         <span onClick={()=>handleDecrement(_id)} className=' cursor-pointer text-2xl bg-gray-200 p-3'>-</span> <span className='border-2 border-orange-500 px-5 py-3 text-2xl'>{quantity}</span> <span onClick={()=>handleIncrement(_id)} className=' cursor-pointer text-2xl border-2 bg-gray-200 p-3'>+</span>
      </div> */}
      <button onClick={handleCart}  className='  border-2 border-orange-400 p-5 mt-8 text-2xl font-bold hover:bg-orange-600 ease-in-out duration-300  text-black'>Add to Cart</button>

            </div>
            
        </div>
       <div>
       <h1 className='text-center text-4xl font-bold text-orange-500 mt-20'>Related Products</h1>
     <div className='flex justify-around'>
         {
             datas.map(data=><RelatedProducts
             key={data._id}
             data={data}
             ></RelatedProducts>)
         }
     </div>
       </div>
        </div>
    );
};

export default ProductDetails;