import React from "react";
import Header from "../../components/HomePage/Header/Header";
import Footer from "../../components/HomePage/Footer/Footer";
import WhoAreWe from "../../components/HomePage/WhoAreWe/WhoAreWe";
import Products from "../../components/HomePage/Products/Products";

const HomePage = () => {
  return (
    <>
      <Header />
      <WhoAreWe />
      <Products />
      <Footer />
    </>
  );
};

export default HomePage;
