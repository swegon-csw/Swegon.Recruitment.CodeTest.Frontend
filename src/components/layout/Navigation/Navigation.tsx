import { FiActivity,FiHome, FiPackage } from "react-icons/fi";

import { ROUTES } from "@/utils/constants";

import { Nav, NavContent, StyledNavLink } from "./Navigation.styled";

export default function Navigation() {
  return (
    <Nav>
      <NavContent>
        <StyledNavLink to={ROUTES.HOME}>
          <FiHome />
          Home
        </StyledNavLink>
        <StyledNavLink to={ROUTES.PRODUCTS}>
          <FiPackage />
          Products
        </StyledNavLink>
        <StyledNavLink to={ROUTES.CALCULATOR}>
          <FiActivity />
          Calculator
        </StyledNavLink>
      </NavContent>
    </Nav>
  );
}
