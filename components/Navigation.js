import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  &.selected {
    color: red;
  }
`;

const Navigation = () => {
  return (
    <header>
      <StyledNavLink activeClassName="selected" to="/characters">
        Characters
      </StyledNavLink>
      <StyledNavLink activeClassName="selected" to="/comics">
        Comics
      </StyledNavLink>
    </header>
  );
};

export default Navigation;
