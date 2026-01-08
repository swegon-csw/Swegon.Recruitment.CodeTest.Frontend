// Product-related types
export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  currency: string;
  imageUrl?: string;
  inStock: boolean;
  rating?: number;
  reviewCount?: number;
  createdAt: string;
  updatedAt: string;
}

export interface ProductDetail extends Product {
  specifications: ProductSpecification[];
  features: string[];
  relatedProducts?: Product[];
  manufacturer: string;
  warranty: string;
}

export interface ProductSpecification {
  name: string;
  value: string;
  unit?: string;
}

export interface FilterOptions {
  search: string;
  category: string;
  sortBy: 'name' | 'price' | 'rating' | 'createdAt';
  sortDirection?: 'asc' | 'desc';
  minPrice?: number;
  maxPrice?: number;
  inStockOnly?: boolean;
}

export interface ProductCategory {
  id: string;
  name: string;
  count: number;
}
