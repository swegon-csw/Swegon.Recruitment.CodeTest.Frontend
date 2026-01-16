import { Spinner,StyledButton } from "./Button.styled";
import { ButtonProps } from "./Button.types";

export default function Button({
  variant = "primary",
  size = "medium",
  loading = false,
  fullWidth = false,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      $loading={loading}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Spinner />}
      {children}
    </StyledButton>
  );
}
