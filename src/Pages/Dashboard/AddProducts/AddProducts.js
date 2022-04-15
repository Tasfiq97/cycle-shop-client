import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';

const AddProducts = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
      axios.post("https://shrouded-lake-15688.herokuapp.com/products",data)
      .then(result=>{
          if(result.data.acknowledged){
              swal("Nice", "Product is added", "success")
          }
     });
    };
    return (
        <div>
            <h1 className='text-4xl text-center p-10 font-bold '>Add Products</h1>
            <form  className='text-center' onSubmit={handleSubmit(onSubmit)}>
      <input required className='text-xl text-white bg-gray-800 mb-8 py-3 px-2 w-2/3' {...register("name", )} placeholder="product name" /> <br />
      <input required className='text-xl text-white bg-gray-800 mb-8 py-3 px-2 w-2/3' {...register("id", )} placeholder="product id" /> <br />
      <textarea required  rows="4" className='text-xl text-white bg-gray-800 mb-8 py-3 px-2 w-2/3'  {...register("description", )} placeholder="description"/> <br />
      <input className='text-xl text-white bg-gray-800 mb-8 py-3 px-2 w-2/3' placeholder='price' type="number" {...register("price")} /> <br />
      <input required  className='text-xl text-white bg-gray-800 mb-8 py-3 px-2 w-2/3' placeholder='add ratings' type="number" {...register("ratings", { min: 1, max: 5 })} /> <br />
      <input required  className='text-xl text-white bg-gray-800 mb-8 py-3 px-2 w-2/3' placeholder='add quantity' type="number" {...register("quantity")} /> <br />
      <input required  className='text-xl text-white bg-gray-800 mb-8 py-3 px-2 w-2/3' placeholder='add product image' type="text" {...register("img")} /> <br />
      <input required  className='border-2 w-2/3 text-black border-orange-400 p-3  text-2xl font-bold hover:bg-orange-600 ease-in-out duration-300 mb-20  text-white' type="submit" />
    </form>
        </div>
    );
};

export default AddProducts;