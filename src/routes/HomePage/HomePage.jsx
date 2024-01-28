import React from 'react';
import Header from '../../components/HomePage/Header/Header';
import Footer from '../../components/HomePage/Footer/Footer';
import WhoAreWe from '../../components/HomePage/WhoAreWe/WhoAreWe';
import Products from '../../components/HomePage/Products/Products';
import Solutions from '../../components/HomePage/Solutions/Solutions';
import ContactUs from '../../components/HomePage/ContactUs/ContactUs';
import Brands from '../../components/HomePage/Brands/Brands';

const HomePage = () => {
  return (
    <>
      <Header />
      <WhoAreWe />
      <Products />
      <Solutions />
      <Brands />
      <ContactUs />
      <Footer />
    </>
  );
};

export default HomePage;
