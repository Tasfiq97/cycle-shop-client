import React from 'react';

const Footer = () => {
    return (
        <div className='flex justify-between items-center p-10 bg-gray-900 text-white'>

            <div>
           <h1 className='text-3xl font-bold py-5'>Useful links</h1>
           <p>Legal & Privacy</p>
              <p>Contact</p> 
              <p>Gift Card</p>
              <p>Customer Service</p>
              <p>My Account</p>
              <p>Find A Store</p>

            </div>
            <div>
                <h1 className='text-3xl font-bold py-5'>My account</h1>
                <p>My profile</p>
                <p>My order History</p>
                <p>My wish list</p>
                <p> Order tracking</p>

            </div>
            <div>
                <h1 className='text-3xl font-bold py-5'>Company</h1>
                <p>About us</p>
                <p>Careers</p>
                <p>Blog</p>
                <p>Affliate</p>

            </div>
            <div>
                <h1 className='text-3xl font-bold py-5'>Contact us</h1>
            </div>
            
        </div>
    );
};

export default Footer;