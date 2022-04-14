import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import DashbaordProduct from './DashbaordProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert';


const DashboardHome = () => {
    const {user}=useAuth();
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        axios.get("https://shrouded-lake-15688.herokuapp.com/cart")
        .then(res=>setCart(res.data));
    },[user]);

    const filteredData=cart.filter(cart=>cart.email===user.email)||{};
console.log(filteredData);
const handleDelete=(id)=>{
    fetch(`https://shrouded-lake-15688.herokuapp.com/delete/${id}`,{
        method:"DELETE",
         headers:{"content-type":"application/json"},
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.acknowledged){
            swal({
                title: "Nice!",
                text: "You Order has been cancelled",
                icon: "success",
                button: "Close",
              })
            const remainning= cart.filter(data=>data._id!=id)
                 setCart(remainning);
        }
    })
       }
    return (
        <div>
             <h1 className=' text-2xl text-center p-5 font-bold'>You have <span className='font-bold text-orange-500'>{filteredData.length}</span> Orders</h1>
                   <div>
                       {
                           filteredData.map(cart=>{
                            return (
                                <div className='flex justify-between py-10 px-8 mb-10 items-center border-4 border-orange-300'>
                                    <img className='w-24' src={cart.product.img} alt="" />
                                    <h1 className='text-xl font-bold'>{cart.product.name}</h1>
                                    <p className='text-xl text-orange-500 font-bold'>{cart.product.price} $</p>
                                    <p>quantity: {cart.product.quantity}</p>
                                    <button  onClick={()=>handleDelete(cart._id)} className='  border-2 border-orange-400 p-2 mt-8 text-2xl font-bold hover:bg-orange-600 ease-in-out duration-300  text-black'><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
                        
                                </div>
                            );
                           })
                       }
                   </div>
        </div>
    );
};

export default DashboardHome;