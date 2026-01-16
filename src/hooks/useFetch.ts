import { useEffect, useState } from "react";

import { LoadingState } from "@/types/common.types";

interface UseFetchOptions<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
}

export function useFetch<T>(fetchFn: () => Promise<T>, options: UseFetchOptions<T> = {}) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<LoadingState>("idle");
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      try {
        setLoading("loading");
        setError(null);
        const result = await fetchFn();

        if (!cancelled) {
          setData(result);
          setLoading("success");
          options.onSuccess?.(result);
        }
      } catch (err) {
        if (!cancelled) {
          const error = err instanceof Error ? err : new Error("An error occurred");
          setError(error);
          setLoading("error");
          options.onError?.(error);
        }
      }
    };

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [fetchFn, options]);

  const refetch = async () => {
    try {
      setLoading("loading");
      setError(null);
      const result = await fetchFn();
      setData(result);
      setLoading("success");
      options.onSuccess?.(result);
    } catch (err) {
      const error = err instanceof Error ? err : new Error("An error occurred");
      setError(error);
      setLoading("error");
      options.onError?.(error);
    }
  };

  return {
    data,
    loading: loading === "loading",
    error,
    isSuccess: loading === "success",
    isError: loading === "error",
    refetch,
  };
}
