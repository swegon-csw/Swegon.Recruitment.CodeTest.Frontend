import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

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
