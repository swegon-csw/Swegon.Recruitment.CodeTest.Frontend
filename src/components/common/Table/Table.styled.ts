import styled from "styled-components";

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.large};
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${({ theme }) => theme.colors.cardBackground};
`;

export const Thead = styled.thead`
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
`;

export const Th = styled.th`
  padding: ${({ theme }) => theme.spacing.md};
  text-align: left;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.heading};
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
`;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundAlt};
  }
`;

export const Td = styled.td`
  padding: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text};
`;

export const EmptyMessage = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  color: ${({ theme }) => theme.colors.textLight};
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.large};
`;
export {};
