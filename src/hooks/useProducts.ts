import { useState, useEffect } from 'react';
import { productService } from '@/services/productService';
import { Product, FilterOptions } from '@/types/product.types';
import { PaginatedResponse, LoadingState } from '@/types/common.types';
import { transformApiError } from '@/services/api/apiInterceptors';

export function useProducts(filters: FilterOptions, page: number = 1, pageSize: number = 20) {
  const [data, setData] = useState<PaginatedResponse<Product> | null>(null);
  const [loading, setLoading] = useState<LoadingState>('idle');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading('loading');
        setError(null);
        const result = await productService.getProducts(filters, page, pageSize);
        setData(result);
        setLoading('success');
      } catch (err) {
        const apiError = transformApiError(err);
        setError(apiError.message);
        setLoading('error');
      }
    };

    fetchProducts();
  }, [filters.search, filters.category, filters.sortBy, filters.sortDirection, filters.minPrice, filters.maxPrice, filters.inStockOnly, page, pageSize]);

  return {
    products: data?.data || [],
    pagination: data?.pagination,
    loading: loading === 'loading',
    error,
    isSuccess: loading === 'success',
    isError: loading === 'error',
  };
}
