import styled from "styled-components";

export const FiltersContainer = styled.aside`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.xl};
  height: fit-content;
  position: sticky;
  top: 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: static;
  }
`;

export const FilterTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.heading};
`;

export const FilterGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const FilterLabel = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;
`;
