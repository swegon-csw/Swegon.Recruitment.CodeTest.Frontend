import { SelectHTMLAttributes } from "react";

export interface Option {
  label: string;
  value: string | number;
}

export interface DropdownProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "children"> {
  label?: string;
  options: Option[];
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}
