import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import HomePageProduct from '../HomePageProduct/HomePageProduct';
import TopProductCarousel from '../TopProductCarousel/TopProductCarousel';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopProductCarousel></TopProductCarousel>
            <Category></Category>
            <HomePageProduct></HomePageProduct>
            <Footer></Footer>
        </div>
    );
};

export default Home;