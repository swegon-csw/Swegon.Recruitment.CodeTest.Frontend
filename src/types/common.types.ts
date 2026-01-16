export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface ApiError {
  message: string;
  code: string;
  status: number;
}

export type SortDirection = "asc" | "desc";

export interface SortParams {
  field: string;
  direction: SortDirection;
}

export type LoadingState = "idle" | "loading" | "success" | "error";

export interface SelectOption {
  label: string;
  value: string | number;
}
