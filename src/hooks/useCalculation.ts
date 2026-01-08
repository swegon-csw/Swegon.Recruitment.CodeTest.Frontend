import { useState } from 'react';
import { calculationService } from '@/services/calculationService';
import { CalculationInput, CalculationResult } from '@/types/calculation.types';
import { LoadingState } from '@/types/common.types';
import { transformApiError } from '@/services/api/apiInterceptors';

export function useCalculation() {
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [loading, setLoading] = useState<LoadingState>('idle');
  const [error, setError] = useState<string | null>(null);

  const calculate = async (input: CalculationInput) => {
    try {
      setLoading('loading');
      setError(null);
      const calculationResult = await calculationService.calculate(input);
      setResult(calculationResult);
      setLoading('success');
      return calculationResult;
    } catch (err) {
      const apiError = transformApiError(err);
      setError(apiError.message);
      setLoading('error');
      throw err;
    }
  };

  const reset = () => {
    setResult(null);
    setLoading('idle');
    setError(null);
  };

  return {
    result,
    loading: loading === 'loading',
    error,
    isSuccess: loading === 'success',
    isError: loading === 'error',
    calculate,
    reset,
  };
}
