import { StyledNavLink, StyledNav } from "./Nav.styled.ts"
import { useSelector, useDispatch } from "react-redux";
import { userDataSelector } from "@/redux/selectors.ts";
import { logOutSuccess } from "@/redux/userDataSlice.ts";
import { useLocation } from "react-router-dom";

export const Nav = () => {
    const { name } = useSelector(userDataSelector);
    const dispatch = useDispatch();
    const location = useLocation();
    const isDefaultRouteActive = !['/sprint', '/login'].includes(location.pathname);

    const handleLogOut = () => {
        dispatch(logOutSuccess(null));
    }

    return (
        <StyledNav>
            <StyledNavLink to="/" $forceActive={isDefaultRouteActive}>Main</StyledNavLink>
            <StyledNavLink to="/sprint">Sprint</StyledNavLink>
            {name === "" && <StyledNavLink to="/login">Log In</StyledNavLink>}
            {name !== "" && <button type="button" onClick={ handleLogOut} className="ml-4 en-vocab-btn ">Log Out</button>}
        </StyledNav>
    );

}