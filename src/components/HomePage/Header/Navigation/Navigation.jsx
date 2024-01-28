import React from 'react';
import styled from 'styled-components';
import { NavigationCategories } from '../../../../data-objects/arrays';

const NavigationContainer = styled.div`
  padding: 5rem;
  display: flex;
  gap: 1rem;
  justify-content: space-evenly;
`;

const Logo = styled.a``;

const NavLink = styled.a`
  transition: transform 700ms ease-in;
  border-bottom: 1px solid transparent;
  &:hover {
    border-bottom: 1px solid white;
    cursor: pointer;
    /* transform: scale(1.05); */
    color: rgb(156, 255, 44);
  }
`;

const Navigation = () => {
  return (
    <NavigationContainer>
      <Logo>LOGO</Logo>
      {NavigationCategories.map((nav) => (
        <NavLink>{nav.name}</NavLink>
      ))}
    </NavigationContainer>
  );
};

export default Navigation;
