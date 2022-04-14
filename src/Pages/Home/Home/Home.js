import React from 'react';
import Features from '../../Features/Features';
import Footer from '../../Footer/Footer';
import KidBike from '../../KidBike/KidBike';
import Products from '../../Products/Products';
import Repair from '../../Repair/Repair';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import ShowReviews from '../ShowReviews/ShowReviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <KidBike></KidBike>
            <Products></Products>
            <Repair></Repair>
            <ShowReviews></ShowReviews>
        </div>
    );
};

export default Home;