import { AxiosError } from "axios";

import { ApiError } from "@/types/common.types";

export function transformApiError(error: unknown): ApiError {
  if (error instanceof AxiosError) {
    return {
      message: error.response?.data?.message || error.message || "An error occurred",
      code: error.code || "UNKNOWN_ERROR",
      status: error.response?.status || 500,
    };
  }

  if (error instanceof Error) {
    return {
      message: error.message,
      code: "UNKNOWN_ERROR",
      status: 500,
    };
  }

  return {
    message: "An unknown error occurred",
    code: "UNKNOWN_ERROR",
    status: 500,
  };
}
