import { StyledNavLink, StyledNav } from "./Nav.styled.ts"
import { useSelector, useDispatch } from "react-redux";
import { userDataSelector } from "@/redux/selectors.ts";
import { logOutSuccess } from "@/redux/userDataSlice.ts";

export const Nav = () => {
    const { name } = useSelector(userDataSelector);
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(logOutSuccess(null));
    }

    return (
        <StyledNav>
            <StyledNavLink to="/">Main</StyledNavLink>
            {name === "" && <StyledNavLink to="/login">Log In</StyledNavLink>}
            {name !== "" && <button type="button" onClick={ handleLogOut} className="mr-1">Log Out</button>}
            <StyledNavLink to="/sprint">Sprint</StyledNavLink>
        </StyledNav>
    );

}