import { forwardRef } from "react";

import { Container, ErrorText, HelperText,Label, Required, StyledInput } from "./Input.styled";
import { InputProps } from "./Input.types";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, fullWidth = false, ...props }, ref) => {
    return (
      <Container $fullWidth={fullWidth}>
        {label && (
          <Label htmlFor={props.id}>
            {label}
            {props.required && <Required>*</Required>}
          </Label>
        )}
        <StyledInput ref={ref} $hasError={!!error} $fullWidth={fullWidth} {...props} />
        {error && <ErrorText>{error}</ErrorText>}
        {helperText && !error && <HelperText>{helperText}</HelperText>}
      </Container>
    );
  }
);

Input.displayName = "Input";

export default Input;
