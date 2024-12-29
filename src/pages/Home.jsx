import React from 'react'
import Slider from '../components/Slider/Slider'
import Categories from '../components/Categories/Categories'
import Policy from '../components/Policy';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <> <Header/>
        <Slider/>
        <Categories/>
        <Policy/>
        <Footer/>
    </>
  );
}

export default Home