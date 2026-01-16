import { FilterOptions,Product, ProductDetail } from "@/types/product.types";

import { apiClient } from "./api/apiClient";

export const productService = {
  async getProducts(filters: FilterOptions): Promise<Product[]> {
    const params = new URLSearchParams({
      search: filters.search,
      category: filters.category,
      sortBy: filters.sortBy,
      sortDirection: filters.sortDirection || "asc",
    });

    if (filters.minPrice !== undefined) {
      params.append("minPrice", filters.minPrice.toString());
    }
    if (filters.maxPrice !== undefined) {
      params.append("maxPrice", filters.maxPrice.toString());
    }
    if (filters.inStockOnly) {
      params.append("inStockOnly", "true");
    }

    const response = await apiClient.get<Product[]>(`/products?${params}`);
    return response.data;
  },

  async getProductById(id: string): Promise<ProductDetail> {
    const response = await apiClient.get<ProductDetail>(`/products/${id}`);
    return response.data;
  },

  async createProduct(product: Omit<Product, "id" | "createdAt" | "updatedAt">): Promise<Product> {
    const response = await apiClient.post<Product>("/products", product);
    return response.data;
  },

  async updateProduct(id: string, product: Partial<Product>): Promise<Product> {
    const response = await apiClient.put<Product>(`/products/${id}`, product);
    return response.data;
  },

  async deleteProduct(id: string): Promise<void> {
    await apiClient.delete(`/products/${id}`);
  },
};
