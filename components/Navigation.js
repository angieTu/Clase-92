import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  justify-content: space-evenly;
  display: flex;
  position: fixed;
  background-color: white;
  top: 0;
  z-index: 10;
  height: 15%;

  & > a {
    font-size: 30px;
  }
`;

const StyledNavLink = styled(NavLink)`
  &.selected {
    color: red;
  }
`;

const Navigation = () => {
  return (
    <Header>
      <StyledNavLink activeClassName="selected" to="/characters">
        Characters
      </StyledNavLink>
      <StyledNavLink activeClassName="selected" to="/comics">
        Comics
      </StyledNavLink>
    </Header>
  );
};

export default Navigation;
