import { Product, ProductDetail, FilterOptions } from '@/types/product.types';
import { CalculationInput, CalculationResult, CalculationHistory } from '@/types/calculation.types';
import { PaginatedResponse } from '@/types/common.types';
import { generateId } from '@/utils/helpers';
import { ACTIVITY_LEVELS } from '@/utils/constants';

// Mock product data
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'GOLD RX Air Handling Unit',
    description: 'High-efficiency air handling unit with heat recovery',
    category: 'Air Handling Units',
    price: 15000,
    currency: 'USD',
    imageUrl: 'https://via.placeholder.com/300x200?text=GOLD+RX',
    inStock: true,
    rating: 4.5,
    reviewCount: 24,
    createdAt: '2025-01-01T00:00:00Z',
    updatedAt: '2025-01-01T00:00:00Z',
  },
  {
    id: '2',
    name: 'SILVER e3 Fan Coil',
    description: 'Energy-efficient fan coil unit for commercial spaces',
    category: 'Fan Coils',
    price: 3500,
    currency: 'USD',
    imageUrl: 'https://via.placeholder.com/300x200?text=SILVER+e3',
    inStock: true,
    rating: 4.2,
    reviewCount: 18,
    createdAt: '2025-01-02T00:00:00Z',
    updatedAt: '2025-01-02T00:00:00Z',
  },
  {
    id: '3',
    name: 'BLUE BOX Chiller',
    description: 'Compact and efficient cooling solution',
    category: 'Chillers',
    price: 25000,
    currency: 'USD',
    imageUrl: 'https://via.placeholder.com/300x200?text=BLUE+BOX',
    inStock: false,
    rating: 4.8,
    reviewCount: 32,
    createdAt: '2025-01-03T00:00:00Z',
    updatedAt: '2025-01-03T00:00:00Z',
  },
  {
    id: '4',
    name: 'CASA W4 Heat Pump',
    description: 'Advanced heat pump with smart controls',
    category: 'Heat Pumps',
    price: 12000,
    currency: 'USD',
    imageUrl: 'https://via.placeholder.com/300x200?text=CASA+W4',
    inStock: true,
    rating: 4.6,
    reviewCount: 28,
    createdAt: '2025-01-04T00:00:00Z',
    updatedAt: '2025-01-04T00:00:00Z',
  },
  {
    id: '5',
    name: 'PARASOL Ventilation Unit',
    description: 'Smart ventilation with air quality monitoring',
    category: 'Ventilation',
    price: 5500,
    currency: 'USD',
    imageUrl: 'https://via.placeholder.com/300x200?text=PARASOL',
    inStock: true,
    rating: 4.3,
    reviewCount: 15,
    createdAt: '2025-01-05T00:00:00Z',
    updatedAt: '2025-01-05T00:00:00Z',
  },
];

class MockDataService {
  // Products
  getProducts(
    filters: FilterOptions,
    page: number = 1,
    pageSize: number = 20
  ): Promise<PaginatedResponse<Product>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        let filtered = [...mockProducts];

        // Apply search filter
        if (filters.search) {
          const search = filters.search.toLowerCase();
          filtered = filtered.filter(
            (p) =>
              p.name.toLowerCase().includes(search) ||
              p.description.toLowerCase().includes(search)
          );
        }

        // Apply category filter
        if (filters.category && filters.category !== 'all' && filters.category !== 'All') {
          filtered = filtered.filter((p) => p.category === filters.category);
        }

        // Apply price filters
        if (filters.minPrice !== undefined) {
          filtered = filtered.filter((p) => p.price >= filters.minPrice!);
        }
        if (filters.maxPrice !== undefined) {
          filtered = filtered.filter((p) => p.price <= filters.maxPrice!);
        }

        // Apply stock filter
        if (filters.inStockOnly) {
          filtered = filtered.filter((p) => p.inStock);
        }

        // Apply sorting
        filtered.sort((a, b) => {
          const direction = filters.sortDirection === 'desc' ? -1 : 1;
          if (filters.sortBy === 'price') {
            return (a.price - b.price) * direction;
          }
          if (filters.sortBy === 'rating' && a.rating && b.rating) {
            return (a.rating - b.rating) * direction;
          }
          if (filters.sortBy === 'createdAt') {
            return (new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()) * direction;
          }
          return a.name.localeCompare(b.name) * direction;
        });

        // Apply pagination
        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        const paginatedData = filtered.slice(start, end);

        resolve({
          data: paginatedData,
          pagination: {
            page,
            pageSize,
            total: filtered.length,
            totalPages: Math.ceil(filtered.length / pageSize),
          },
        });
      }, 500);
    });
  }

  getProductById(id: string): Promise<ProductDetail> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const product = mockProducts.find((p) => p.id === id);
        if (!product) {
          reject(new Error('Product not found'));
          return;
        }

        const productDetail: ProductDetail = {
          ...product,
          specifications: [
            { name: 'Airflow', value: '2000', unit: 'm³/h' },
            { name: 'Power', value: '1.5', unit: 'kW' },
            { name: 'Voltage', value: '400', unit: 'V' },
            { name: 'Weight', value: '150', unit: 'kg' },
          ],
          features: [
            'Energy efficient operation',
            'Low noise level',
            'Easy maintenance',
            'Smart controls',
          ],
          manufacturer: 'Swegon AB',
          warranty: '5 years',
          relatedProducts: mockProducts.filter((p) => p.id !== id).slice(0, 3),
        };

        resolve(productDetail);
      }, 300);
    });
  }

  // Calculations
  calculate(input: CalculationInput): Promise<CalculationResult> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const { area, height, occupancy, activityLevel, temperature } = input;
        const volume = area * height;
        const activityMultiplier = ACTIVITY_LEVELS[activityLevel].multiplier;

        // Simple calculation formulas (for demonstration)
        const airflow = (volume * 6 * activityMultiplier) / 3600; // m³/s
        const coolingCapacity = area * 100 * activityMultiplier; // W
        const heatingCapacity = area * 80 * activityMultiplier; // W
        const energyConsumption = (coolingCapacity + heatingCapacity) * 0.7 / 1000; // kWh

        const result: CalculationResult = {
          airflow: Math.round(airflow * 100) / 100,
          coolingCapacity: Math.round(coolingCapacity),
          heatingCapacity: Math.round(heatingCapacity),
          energyConsumption: Math.round(energyConsumption * 100) / 100,
          cost: {
            installation: Math.round(area * 50),
            annual: Math.round(energyConsumption * 365 * 0.15),
            lifetime: Math.round(energyConsumption * 365 * 15 * 0.15),
          },
          recommendations: [
            'Consider high-efficiency equipment for energy savings',
            'Regular maintenance recommended every 6 months',
            'Install smart controls for optimized operation',
          ],
        };

        resolve(result);
      }, 800);
    });
  }

  getCalculationHistory(): Promise<CalculationHistory[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const history: CalculationHistory[] = [
          {
            id: generateId(),
            timestamp: '2025-01-07T10:30:00Z',
            name: 'Office Building Calculation',
            input: {
              area: 500,
              height: 3,
              occupancy: 50,
              activityLevel: 'medium',
              temperature: 22,
              humidity: 50,
            },
            result: {
              airflow: 1.39,
              coolingCapacity: 75000,
              heatingCapacity: 60000,
              energyConsumption: 94.5,
              cost: {
                installation: 25000,
                annual: 5170,
                lifetime: 77550,
              },
              recommendations: [
                'Consider high-efficiency equipment for energy savings',
                'Regular maintenance recommended every 6 months',
              ],
            },
          },
        ];

        resolve(history);
      }, 300);
    });
  }
}

export const mockDataService = new MockDataService();
