import React from 'react';
import styled from 'styled-components';

const HeroSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem;
  margin-left: 10rem;
  margin-top: 3rem;
`;

const HeroTitle1 = styled.h1``;

const HeroTitle2 = styled.h1`
  color: rgb(156, 255, 44);
`;

const ProductDescription = styled.p`
  width: 20rem;
  margin-bottom: 4rem;
`;

const ContactUsButton = styled.button`
  font-weight: bold;
  font-size: large;
  width: 10rem;
  background: linear-gradient(
    90deg,
    rgba(75, 194, 38, 1) 19%,
    rgba(125, 245, 26, 1) 93%
  );
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 100%
    );
    color: green;
  }
`;

const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <HeroTitle1>Lorem ipsum dolor sit amet consectetur</HeroTitle1>
      <HeroTitle2>
        Corrupti impedit molestias officiis dignissimos? Quo.
      </HeroTitle2>
      <ProductDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        necessitatibus nam architecto repellat cum ipsum alias eveniet
        laboriosam, vitae eius aperiam recusandae facilis ea officiis ipsam
        autem, neque, consequuntur nulla!
      </ProductDescription>
      <ContactUsButton>Contact Us</ContactUsButton>
    </HeroSectionContainer>
  );
};

export default HeroSection;
