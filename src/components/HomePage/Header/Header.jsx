import React from "react";
import Navigation from "./Navigation/Navigation";
import HeroSection from "./HeroSection/HeroSection";
import styled from "styled-components";

const HeaderConainer = styled.div`
  background-image: url("/robot-hero-image.jpg");
  background-size: cover;
`;

const Header = () => {
  return (
    <HeaderConainer>
      <Navigation />
      <HeroSection />
    </HeaderConainer>
  );
};

export default Header;
