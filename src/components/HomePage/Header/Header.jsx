import React from 'react';
import Navigation from './Navigation/Navigation';
import HeroSection from './HeroSection/HeroSection';
import styled from 'styled-components';

const HeaderConainer = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('/printer-image-header.jpg');
  height: 60rem;
  background-size: cover;
  color: white;
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
