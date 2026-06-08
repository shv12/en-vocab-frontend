import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

interface StyledNavLinkProps {
  $forceActive?: boolean;
}

export const StyledNav = styled.nav`
  display: flex;
  align-content: center;
  justify-content: end;
`;

export const StyledNavLink = styled(NavLink)<StyledNavLinkProps>`
  display: flex;
  align-items: center;
  padding: 5px 20px;
  background-color: rgb(34 197 94);
  opacity: 0.9;
  margin-left: 1rem;
  border-radius: 50px;
  color: rgb(243 244 246);

  &.active {
    background-color: rgb(20 83 45);
    color: #FFFFFFFF;
    box-shadow: 0px 0px 20px #00FF00;
    }

    ${props => props.$forceActive ? `
      background-color: rgb(20 83 45);
      color: #FFFFFFFF;
      box-shadow: 0px 0px 20px #00FF00;
        `: ""
    }

  &:hover {
    background-color: rgb(21 128 61);
  }
`;
