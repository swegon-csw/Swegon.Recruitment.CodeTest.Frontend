import { APP_NAME, APP_VERSION } from "@/utils/constants";

import { Copyright, FooterContainer, FooterContent, Links,Version } from "./Footer.styled";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <Copyright>
          © {currentYear} {APP_NAME}. All rights reserved.
        </Copyright>
        <Links>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#contact">Contact</a>
        </Links>
        <Version>Version {APP_VERSION}</Version>
      </FooterContent>
    </FooterContainer>
  );
}
