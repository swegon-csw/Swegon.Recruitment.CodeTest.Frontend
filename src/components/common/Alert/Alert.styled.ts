import styled, { css } from "styled-components";

const getAlertStyles = (type: string) => {
  switch (type) {
    case "success":
      return css`
        background-color: ${({ theme }) => theme.colors.successLight};
        color: ${({ theme }) => theme.colors.success};
        border-color: ${({ theme }) => theme.colors.success};
      `;
    case "error":
      return css`
        background-color: ${({ theme }) => theme.colors.errorLight};
        color: ${({ theme }) => theme.colors.error};
        border-color: ${({ theme }) => theme.colors.error};
      `;
    case "warning":
      return css`
        background-color: ${({ theme }) => theme.colors.warningLight};
        color: ${({ theme }) => theme.colors.warning};
        border-color: ${({ theme }) => theme.colors.warning};
      `;
    default:
      return css`
        background-color: ${({ theme }) => theme.colors.infoLight};
        color: ${({ theme }) => theme.colors.info};
        border-color: ${({ theme }) => theme.colors.info};
      `;
  }
};

export const AlertContainer = styled.div<{ $type: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: 1px solid;
  ${({ $type }) => getAlertStyles($type)}
`;

export const Content = styled.div`
  flex: 1;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  padding: 0;
  margin-left: 1rem;
  opacity: 0.7;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;
export {};
