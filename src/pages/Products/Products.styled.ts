import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

export const PageTitle = styled.h1`
  color: ${({ theme }) => theme.colors.heading};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const PageDescription = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1.125rem;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
`;
