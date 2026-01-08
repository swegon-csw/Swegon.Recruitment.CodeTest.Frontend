import { apiClient } from './api/apiClient';

export interface Configuration {
  id: string;
  name: string;
  value: unknown;
  updatedAt: string;
}

export const configurationService = {
  async getConfiguration(key: string): Promise<Configuration> {
    const response = await apiClient.get<Configuration>(`/configurations/${key}`);
    return response.data;
  },

  async updateConfiguration(key: string, value: unknown): Promise<Configuration> {
    const response = await apiClient.put<Configuration>(`/configurations/${key}`, { value });
    return response.data;
  },

  async getAllConfigurations(): Promise<Configuration[]> {
    const response = await apiClient.get<Configuration[]>('/configurations');
    return response.data;
  },
};
