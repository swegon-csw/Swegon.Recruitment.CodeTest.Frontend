import { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  variant?: "default" | "outlined" | "elevated";
  padding?: "none" | "small" | "medium" | "large";
  onClick?: () => void;
}
