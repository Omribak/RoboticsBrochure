import React from "react";
import styled from "styled-components";

const WhoAreWeContainer = styled.div`
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

const WhoAreWe = () => {
  return (
    <WhoAreWeContainer>
      <Title>Who Are We?</Title>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni provident
        optio iure dicta perferendis qui culpa eveniet veritatis omnis
        accusantium vitae, delectus debitis ex id, doloremque iste fugit! Ab,
        laborum!
      </Description>
    </WhoAreWeContainer>
  );
};

export default WhoAreWe;
