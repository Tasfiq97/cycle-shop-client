import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import img from "../../../images/images.png"

const Header = () => {
    const {user,logout}=useFirebase();
    const handleLogout=()=>{
        logout();
    }
    return (
        <div className='flex justify-around items-center bg-gray-900 text-white'>
            <div className='flex font-bold text-xl'>
           <Link to="/home"><p className=''>Home</p></Link>
           <Link to="/allProducts"><p className='ml-10'>Products</p></Link>
           <p className='ml-10'>Bike repairs</p>
            </div>
            <div>
            <img className='w-2/3 ml-16' src={img} alt="" />
            </div>
         {
             user.email?
            <div className='flex items-center'>
                <Link to="/dashboard"><p className='text-2xl font-bold'>DashBoard</p></Link>
             <button onClick={handleLogout} className='  border-2 border-orange-400 p-3 text-2xl font-bold hover:bg-orange-600 ease-in-out duration-300 ml-10 text-white'>Logout</button>
            </div>:
                <Link className='text-xl font-bold ml-8' to="/login">Sign in</Link>
            
         }
        <div className='text-2xl font-bold'>
      
        {
            user?.email
        }
        </div>
        
        </div>
         
    );
};

export default Header;