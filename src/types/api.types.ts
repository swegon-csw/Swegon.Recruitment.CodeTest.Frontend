export interface ApiConfig {
  baseURL: string;
  timeout: number;
  headers?: Record<string, string>;
}

export interface ApiRequestConfig {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  data?: unknown;
  params?: Record<string, string | number | boolean>;
  headers?: Record<string, string>;
}

export interface ApiInterceptorConfig {
  onRequest?: (config: ApiRequestConfig) => ApiRequestConfig;
  onResponse?: <T>(response: T) => T;
  onError?: (error: Error) => Promise<never>;
}
