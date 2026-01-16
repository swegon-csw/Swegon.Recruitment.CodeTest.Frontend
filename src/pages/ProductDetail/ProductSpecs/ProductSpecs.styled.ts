import styled from "styled-components";

export const SpecsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.xl};
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.heading};
`;

export const SpecList = styled.dl`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const SpecRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;

export const SpecName = styled.dt`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

export const SpecValue = styled.dd`
  color: ${({ theme }) => theme.colors.textLight};
  text-align: right;
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: ${({ theme }) => theme.borderRadius.small};

  &::before {
    content: "✓";
    color: ${({ theme }) => theme.colors.success};
    font-weight: 700;
    font-size: 1.25rem;
  }
`;
export {};
