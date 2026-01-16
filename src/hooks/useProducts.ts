import { useEffect, useState } from "react";

import { transformApiError } from "@/services/api/apiInterceptors";
import { productService } from "@/services/productService";
import { LoadingState } from "@/types/common.types";
import { FilterOptions, Product } from "@/types/product.types";

export function useProducts(filters: FilterOptions) {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<LoadingState>("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading("loading");
        setError(null);
        const result = await productService.getProducts(filters);
        setData(result);
        setLoading("success");
      } catch (err) {
        const apiError = transformApiError(err);
        setError(apiError.message);
        setLoading("error");
      }
    };

    fetchProducts();
  }, [filters]);

  return {
    products: data,
    loading: loading === "loading",
    error,
    isSuccess: loading === "success",
    isError: loading === "error",
  };
}
