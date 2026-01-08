import { useState, useEffect } from 'react';
import { productService } from '@/services/productService';
import { ProductDetail } from '@/types/product.types';
import { LoadingState } from '@/types/common.types';
import { transformApiError } from '@/services/api/apiInterceptors';

export function useProductDetail(id: string | undefined) {
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState<LoadingState>('idle');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        setLoading('loading');
        setError(null);
        const result = await productService.getProductById(id);
        setProduct(result);
        setLoading('success');
      } catch (err) {
        const apiError = transformApiError(err);
        setError(apiError.message);
        setLoading('error');
      }
    };

    fetchProduct();
  }, [id]);

  return {
    product,
    loading: loading === 'loading',
    error,
    isSuccess: loading === 'success',
    isError: loading === 'error',
  };
}
