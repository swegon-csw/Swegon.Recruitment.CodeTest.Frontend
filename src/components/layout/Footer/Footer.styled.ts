import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin-top: auto;
`;

export const FooterContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.875rem;
  margin: 0;
`;

export const Version = styled.span`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.875rem;
`;

export const Links = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};

  a {
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 0.875rem;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
