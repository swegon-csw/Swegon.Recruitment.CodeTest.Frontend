export const apiConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: parseInt(import.meta.env.VITE_API_TIMEOUT) || 30000,
  enableMockData: import.meta.env.VITE_ENABLE_MOCK_DATA === "true",
};
