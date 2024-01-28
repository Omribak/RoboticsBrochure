import React from "react";
import styled from "styled-components";

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: green;
`;

const Description = styled.p`
  width: 20rem;
`;

const Products = () => {
  return (
    <ProductsContainer>
      <Title>Products</Title>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et in veniam
        recusandae rerum rem cum minima deleniti quibusdam, amet nemo nam
        cupiditate sit numquam sint, animi eligendi expedita officia ea.
      </Description>
    </ProductsContainer>
  );
};

export default Products;
