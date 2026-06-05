import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.nav`
  margin-bottom: 15px;
`;

export const StyledNavLink = styled(NavLink)`
  padding-right: 5px;

  &.active {
    color: red;
  }
`;
