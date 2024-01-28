import React from "react";
import styled from "styled-components";

const HeroSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const HeroTitle1 = styled.h1``;

const HeroTitle2 = styled.h1`
  color: green;
`;

const ProductDescription = styled.p`
  width: 20rem;
`;

const ContactUsButton = styled.button`
  width: 10rem;
  background-color: green;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    background-color: white;
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
