import { FiMoon,FiSun } from "react-icons/fi";

import { useTheme } from "@/context/ThemeContext";

import { HeaderActions, HeaderContainer, HeaderContent, Logo, ThemeToggle } from "./Header.styled";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo to="/">Swegon Recruitment</Logo>
        <HeaderActions>
          <ThemeToggle onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "light" ? <FiMoon /> : <FiSun />}
          </ThemeToggle>
        </HeaderActions>
      </HeaderContent>
    </HeaderContainer>
  );
}
