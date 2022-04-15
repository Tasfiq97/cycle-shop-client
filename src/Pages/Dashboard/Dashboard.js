import { faArrowAltCircleRight, faBookJournalWhills, faBookSkull, faCake, faCartPlus, faPallet, faPeopleCarry, faPodcast, faPoundSign, faShoppingBag, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import AddProducts from './AddProducts/AddProducts';
import AddReviews from './AddReviews/AddReviews';
import DashbaordProduct from './DashbaordProduct';
import DashboardHome from './DashboardHome';
import MakeAdmin from './MakeAdmin/MakeAdmin';

const Dashboard = () => {
    const {admin}=useAuth({});
   
    return (
        <div>
            <h1 className='text-5xl px-20 font-bold bg-orange-500 text-white p-5'>Dashboard</h1>
            <div className='flex justify-between'>
                <div className='w-3/3  bg-orange-500 p-10 '>
            <Link to="/dashboard/dash">
            <p className='text-2xl py-5 font-bold text-white'> <FontAwesomeIcon className='mr-4' icon={faShoppingBag}></FontAwesomeIcon> Manage Orders</p>
            </Link>
           {admin && <div>
            <Link to="/dashboard/makeadmin">
            <p className='text-2xl py-5 font-bold text-white'> <FontAwesomeIcon className='mr-4' icon={faUser}></FontAwesomeIcon> Make Admin</p>
            </Link>
            <Link to="/dashboard/addProducts">
            <p className='text-2xl py-5 font-bold text-white'> <FontAwesomeIcon className='mr-4' icon={faCartPlus}></FontAwesomeIcon> Add Product</p>
            </Link>
               </div>}
            <Link to="/dashboard/reviews">
            <p className='text-2xl py-5 font-bold text-white'> <FontAwesomeIcon className='mr-4' icon={faStar}></FontAwesomeIcon> Add Reviews</p>
            </Link>
                </div>
              
                <div className='w-2/3 mt-10 px-16'>
                    <Routes>
                        <Route path='/' element={<DashboardHome></DashboardHome>}></Route>
                        <Route  path="dash" element={<DashboardHome/>}></Route>
                        <Route path="addProducts" element={<AddProducts></AddProducts>}></Route>
                         <Route  path="reviews" element={<AddReviews></AddReviews>}></Route>
                         <Route  path="makeadmin" element={<MakeAdmin></MakeAdmin>}></Route>
                     </Routes> 
                    {/* <DashboardHome></DashboardHome> */}
                </div>
            </div>
           
        </div>
    );
};

export default Dashboard;