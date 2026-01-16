import { ReactNode } from "react";

export interface AlertProps {
  type?: "success" | "error" | "warning" | "info";
  children: ReactNode;
  onClose?: () => void;
}
