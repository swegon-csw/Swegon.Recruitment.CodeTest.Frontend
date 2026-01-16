import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl};
`;

export const ErrorCode = styled.h1`
  font-size: 8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  line-height: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 6rem;
  }
`;

export const ErrorTitle = styled.h2`
  font-size: 2rem;
  margin: ${({ theme }) => theme.spacing.lg} 0;
  color: ${({ theme }) => theme.colors.heading};
`;

export const ErrorDescription = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textLight};
  max-width: 500px;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;
export {};
