import { ROUTES } from '@/utils/constants';

export const routeConfig = [
  {
    path: ROUTES.HOME,
    name: 'Home',
    description: 'Home page with overview',
  },
  {
    path: ROUTES.PRODUCTS,
    name: 'Products',
    description: 'Browse all products',
  },
  {
    path: ROUTES.PRODUCT_DETAIL,
    name: 'Product Detail',
    description: 'View product details',
  },
  {
    path: ROUTES.CALCULATOR,
    name: 'Calculator',
    description: 'Calculate ventilation requirements',
  },
] as const;
