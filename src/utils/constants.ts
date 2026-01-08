// Application constants
export const APP_NAME = 'Swegon Recruitment Code Test';
export const APP_VERSION = '1.0.0';

// API endpoints
export const API_ENDPOINTS = {
  PRODUCTS: '/products',
  PRODUCT_DETAIL: '/products/:id',
  CALCULATIONS: '/calculations',
  CONFIGURATIONS: '/configurations',
} as const;

// Pagination
export const DEFAULT_PAGE_SIZE = 20;
export const PAGE_SIZE_OPTIONS = [10, 20, 50, 100];

// Product categories
export const PRODUCT_CATEGORIES = [
  'All',
  'Air Handling Units',
  'Fan Coils',
  'Chillers',
  'Heat Pumps',
  'Ventilation',
  'Controls',
] as const;

// Activity levels for calculations
export const ACTIVITY_LEVELS = {
  low: { label: 'Low', multiplier: 1.0 },
  medium: { label: 'Medium', multiplier: 1.5 },
  high: { label: 'High', multiplier: 2.0 },
} as const;

// Local storage keys
export const STORAGE_KEYS = {
  THEME: 'app_theme',
  CALCULATION_HISTORY: 'calculation_history',
  USER_PREFERENCES: 'user_preferences',
} as const;

// Sort options
export const SORT_OPTIONS = [
  { label: 'Name', value: 'name' },
  { label: 'Price', value: 'price' },
  { label: 'Rating', value: 'rating' },
  { label: 'Newest', value: 'createdAt' },
] as const;

// Timeouts
export const DEBOUNCE_DELAY = 300; // ms
export const API_TIMEOUT = 30000; // ms

// Validation limits
export const VALIDATION_LIMITS = {
  MIN_AREA: 10,
  MAX_AREA: 10000,
  MIN_HEIGHT: 2,
  MAX_HEIGHT: 20,
  MIN_OCCUPANCY: 1,
  MAX_OCCUPANCY: 1000,
  MIN_TEMPERATURE: -10,
  MAX_TEMPERATURE: 40,
  MIN_HUMIDITY: 0,
  MAX_HUMIDITY: 100,
} as const;
