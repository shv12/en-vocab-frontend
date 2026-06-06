import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.nav`
  margin-bottom: 15px;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 5px;
  background-color: green;
  opacity: 0.9;
  margin-right: 1rem;
  border-radius: 5px;

  &.active {
    background-color: rgb(20 83 45);
    color: white;
  }
`;
