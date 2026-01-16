import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const NavContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const StyledNavLink = styled(NavLink)`
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
