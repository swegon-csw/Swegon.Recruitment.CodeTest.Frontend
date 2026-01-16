import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "success" | "outline";
  size?: "small" | "medium" | "large";
  loading?: boolean;
  fullWidth?: boolean;
  children: ReactNode;
}
