import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FiHome, FiPackage, FiCalculator } from 'react-icons/fi';
import { ROUTES } from '@/utils/constants';

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const NavContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.textLight};
  text-decoration: none;
  border-bottom: 3px solid transparent;
  transition: all 0.2s ease;
  font-weight: 500;
  
  svg {
    width: 18px;
    height: 18px;
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.backgroundAlt};
  }
  
  &.active {
    color: ${({ theme }) => theme.colors.primary};
    border-bottom-color: ${({ theme }) => theme.colors.primary};
  }
`;

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
          <FiCalculator />
          Calculator
        </StyledNavLink>
      </NavContent>
    </Nav>
  );
}
