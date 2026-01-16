import styled from "styled-components";

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.medium};
    transform: translateY(-1px);
  }
`;

export const CheckboxContainer = styled.div<{ $completed: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 6px;
  border: 2px solid ${({ theme, $completed }) => ($completed ? theme.colors.success : theme.colors.border)};
  background: ${({ theme, $completed }) => ($completed ? theme.colors.success : theme.colors.cardBackground)};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.2s ease;

  svg {
    color: white;
    font-size: 14px;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Title = styled.h3<{ $completed: boolean }>`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme, $completed }) => ($completed ? theme.colors.textLight : theme.colors.text)};
  margin: 0;
  text-decoration: ${({ $completed }) => ($completed ? "line-through" : "none")};
  transition: all 0.2s ease;
`;

export const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const Badge = styled.span`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  padding: 2px 8px;
  border-radius: 4px;
  font-weight: 500;
`;
