import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/components/layout/Layout/Layout';
import Home from '@/pages/Home/Home';
import Products from '@/pages/Products/Products';
import ProductDetail from '@/pages/ProductDetail/ProductDetail';
import Calculator from '@/pages/Calculator/Calculator';
import NotFound from '@/pages/NotFound/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'products/:id',
        element: <ProductDetail />,
      },
      {
        path: 'calculator',
        element: <Calculator />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
