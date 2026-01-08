import { apiClient } from './api/apiClient';
import { mockDataService } from './mockDataService';
import { apiConfig } from './api/apiConfig';
import { CalculationInput, CalculationResult, CalculationHistory } from '@/types/calculation.types';

export const calculationService = {
  async calculate(input: CalculationInput): Promise<CalculationResult> {
    // Use mock data if enabled
    if (apiConfig.enableMockData) {
      return mockDataService.calculate(input);
    }

    const response = await apiClient.post<CalculationResult>('/calculations', input);
    return response.data;
  },

  async getHistory(): Promise<CalculationHistory[]> {
    // Use mock data if enabled
    if (apiConfig.enableMockData) {
      return mockDataService.getCalculationHistory();
    }

    const response = await apiClient.get<CalculationHistory[]>('/calculations/history');
    return response.data;
  },

  async saveCalculation(
    input: CalculationInput,
    result: CalculationResult,
    name?: string
  ): Promise<CalculationHistory> {
    const response = await apiClient.post<CalculationHistory>('/calculations/save', {
      input,
      result,
      name,
    });
    return response.data;
  },

  async deleteCalculation(id: string): Promise<void> {
    await apiClient.delete(`/calculations/${id}`);
  },
};
