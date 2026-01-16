import { AlertContainer, CloseButton,Content } from "./Alert.styled";
import { AlertProps } from "./Alert.types";

export default function Alert({ type = "info", children, onClose }: AlertProps) {
  return (
    <AlertContainer $type={type} role="alert">
      <Content>{children}</Content>
      {onClose && (
        <CloseButton onClick={onClose} aria-label="Close alert">
          ×
        </CloseButton>
      )}
    </AlertContainer>
  );
}
