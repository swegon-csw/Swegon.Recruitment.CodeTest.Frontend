import "react-toastify/dist/ReactToastify.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import Layout from "@/components/layout/Layout/Layout";
import { useTheme } from "@/context/ThemeContext";
import Calculator from "@/pages/Calculator/Calculator";
import Home from "@/pages/Home/Home";
import NotFound from "@/pages/NotFound/NotFound";
import ProductDetail from "@/pages/ProductDetail/ProductDetail";
import Products from "@/pages/Products/Products";

import { darkTheme, GlobalStyles, lightTheme } from "./AppContent.styled";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <ProductDetail />,
      },
      {
        path: "calculator",
        element: <Calculator />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default function AppContent() {
  const { theme } = useTheme();
  const selectedTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <StyledThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
      />
    </StyledThemeProvider>
  );
}
