import { CalculationHistory,CalculationInput, CalculationResult } from "@/types/calculation.types";

import { apiClient } from "./api/apiClient";

export const calculationService = {
  async calculate(input: CalculationInput): Promise<CalculationResult> {
    const response = await apiClient.post<CalculationResult>("/calculations", input);
    return response.data;
  },

  async calculateV2(input: CalculationInput): Promise<CalculationResult> {
    const response = await apiClient.post<CalculationResult>("/calculations/v2", input);
    return response.data;
  },

  async getHistory(): Promise<CalculationHistory[]> {
    const response = await apiClient.get<CalculationHistory[]>("/calculations/history");
    return response.data;
  },

  async saveCalculation(
    input: CalculationInput,
    result: CalculationResult,
    name?: string
  ): Promise<CalculationHistory> {
    const response = await apiClient.post<CalculationHistory>("/calculations/save", {
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
