import { forwardRef } from "react";

import { Container, ErrorText, HelperText,Label, Required, StyledSelect } from "./Dropdown.styled";
import { DropdownProps } from "./Dropdown.types";

const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  ({ label, options, error, helperText, fullWidth = false, ...props }, ref) => {
    return (
      <Container $fullWidth={fullWidth}>
        {label && (
          <Label htmlFor={props.id}>
            {label}
            {props.required && <Required>*</Required>}
          </Label>
        )}
        <StyledSelect ref={ref} $hasError={!!error} $fullWidth={fullWidth} {...props}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
        {error && <ErrorText>{error}</ErrorText>}
        {helperText && !error && <HelperText>{helperText}</HelperText>}
      </Container>
    );
  }
);

Dropdown.displayName = "Dropdown";

export default Dropdown;
