import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({children}) => {

    const {user,isloading}=useAuth();
    let location = useLocation();
    if(isloading){
        return (
        <div className='text-white p-5 text-2xl'>
    <p className='text-orange-400 font-bold'>Processing <span className='text-5xl animate-ping'>.....</span></p>
</div> )}
   
    if (user.email) {
        return children;
        

      }
      return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;