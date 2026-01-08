import { apiClient } from './api/apiClient';
import { mockDataService } from './mockDataService';
import { apiConfig } from './api/apiConfig';
import { Product, ProductDetail, FilterOptions } from '@/types/product.types';
import { PaginatedResponse } from '@/types/common.types';

export const productService = {
  async getProducts(
    filters: FilterOptions,
    page: number = 1,
    pageSize: number = 20
  ): Promise<PaginatedResponse<Product>> {
    // Use mock data if enabled
    if (apiConfig.enableMockData) {
      return mockDataService.getProducts(filters, page, pageSize);
    }

    const params = new URLSearchParams({
      search: filters.search,
      category: filters.category,
      sortBy: filters.sortBy,
      sortDirection: filters.sortDirection || 'asc',
      page: page.toString(),
      pageSize: pageSize.toString(),
    });

    if (filters.minPrice !== undefined) {
      params.append('minPrice', filters.minPrice.toString());
    }
    if (filters.maxPrice !== undefined) {
      params.append('maxPrice', filters.maxPrice.toString());
    }
    if (filters.inStockOnly) {
      params.append('inStockOnly', 'true');
    }

    const response = await apiClient.get<PaginatedResponse<Product>>(`/products?${params}`);
    return response.data;
  },

  async getProductById(id: string): Promise<ProductDetail> {
    // Use mock data if enabled
    if (apiConfig.enableMockData) {
      return mockDataService.getProductById(id);
    }

    const response = await apiClient.get<ProductDetail>(`/products/${id}`);
    return response.data;
  },

  async createProduct(product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product> {
    const response = await apiClient.post<Product>('/products', product);
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
