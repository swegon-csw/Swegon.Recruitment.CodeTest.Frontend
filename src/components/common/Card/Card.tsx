import { StyledCard } from "./Card.styled";
import { CardProps } from "./Card.types";

export default function Card({ children, variant = "default", padding = "medium", onClick }: CardProps) {
  return (
    <StyledCard $variant={variant} $padding={padding} $clickable={!!onClick} onClick={onClick}>
      {children}
    </StyledCard>
  );
}
