import { StyledSpinner } from "./Spinner.styled";
import { SpinnerProps } from "./Spinner.types";

export default function Spinner({ size = "medium", color = "primary" }: SpinnerProps) {
  return <StyledSpinner $size={size} $color={color} role="status" aria-label="Loading"></StyledSpinner>;
}
