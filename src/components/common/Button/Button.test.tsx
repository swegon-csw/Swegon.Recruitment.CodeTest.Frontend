import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { describe, expect, it, vi } from "vitest";

import { lightTheme } from "@/AppContent/AppContent.styled";

import Button from "./Button";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={lightTheme}>{ui}</ThemeProvider>);
};

describe("Button", () => {
  it("renders with text", () => {
    renderWithTheme(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeDefined();
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    renderWithTheme(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when loading", () => {
    renderWithTheme(<Button loading>Click me</Button>);
    expect(screen.getByRole("button").hasAttribute("disabled")).toBe(true);
  });

  it("is disabled when disabled prop is true", () => {
    renderWithTheme(<Button disabled>Click me</Button>);
    expect(screen.getByRole("button").hasAttribute("disabled")).toBe(true);
  });
});
