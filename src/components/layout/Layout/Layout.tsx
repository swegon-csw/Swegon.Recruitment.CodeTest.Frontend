import { Outlet } from "react-router-dom";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import { LayoutContainer, Main } from "./Layout.styled";

export default function Layout() {
  return (
    <LayoutContainer>
      <Header />
      <Navigation />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </LayoutContainer>
  );
}
