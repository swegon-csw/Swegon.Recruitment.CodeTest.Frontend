import { useState } from 'react';
import styled from 'styled-components';
import { CalculationInput, CalculationResult } from '@/types/calculation.types';
import { useCalculation } from '@/hooks/useCalculation';
import CalculatorForm from './CalculatorForm/CalculatorForm';
import CalculatorResults from './CalculatorResults/CalculatorResults';
import CalculatorChart from './CalculatorChart/CalculatorChart';

const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxl};
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.heading};
`;

const PageDescription = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textLight};
  max-width: 700px;
  margin: 0 auto;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export default function Calculator() {
  const [result, setResult] = useState<CalculationResult | null>(null);
  const { calculate, loading } = useCalculation();

  const handleCalculate = async (input: CalculationInput) => {
    const calculationResult = await calculate(input);
    if (calculationResult) {
      setResult(calculationResult);
    }
  };

  return (
    <CalculatorContainer>
      <PageHeader>
        <PageTitle>Ventilation Calculator</PageTitle>
        <PageDescription>
          Calculate the optimal ventilation requirements for your space. Enter your room details
          below to get personalized recommendations.
        </PageDescription>
      </PageHeader>

      <ContentGrid>
        <CalculatorForm onCalculate={handleCalculate} loading={loading} />
        <div>
          {result && (
            <>
              <CalculatorResults result={result} />
              <CalculatorChart chartData={result.chartData} />
            </>
          )}
        </div>
      </ContentGrid>
    </CalculatorContainer>
  );
}
