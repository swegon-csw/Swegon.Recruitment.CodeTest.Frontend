import { useEffect } from "react";
import { createPortal } from "react-dom";

import { Backdrop, CloseButton, Content, Header, ModalContent, Title } from "./Modal.styled";
import { ModalProps } from "./Modal.types";

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = "medium",
  closeOnBackdropClick = true,
}: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleBackdropClick = () => {
    if (closeOnBackdropClick) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalContent $size={size} onClick={(e) => e.stopPropagation()}>
        {title && (
          <Header>
            <Title>{title}</Title>
            <CloseButton onClick={onClose} aria-label="Close modal">
              ×
            </CloseButton>
          </Header>
        )}
        <Content>{children}</Content>
      </ModalContent>
    </Backdrop>,
    document.body
  );
}
