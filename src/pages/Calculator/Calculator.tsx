import { useState } from "react";

import { useCalculation } from "@/hooks/useCalculation";
import { CalculationInput, CalculationResult } from "@/types/calculation.types";

import { CalculatorContainer, ContentGrid, PageDescription, PageHeader, PageTitle } from "./Calculator.styled";
import CalculatorForm from "./CalculatorForm/CalculatorForm";
import CalculatorResults from "./CalculatorResults/CalculatorResults";

export default function Calculator() {
  const [result, setResult] = useState<CalculationResult | null>(null);
  const { calculate, calculateV2, loading } = useCalculation();

  const handleCalculate = async (input: CalculationInput) => {
    const calculationResult = await calculate(input);
    if (calculationResult) {
      setResult(calculationResult);
    }
  };

  const handleCalculateV2 = async (input: CalculationInput) => {
    const calculationResult = await calculateV2(input);
    if (calculationResult) {
      setResult(calculationResult);
    }
  };

  return (
    <CalculatorContainer>
      <PageHeader>
        <PageTitle>Ventilation Calculator</PageTitle>
        <PageDescription>
          Calculate the optimal ventilation requirements for your space. Enter your room details below to get
          personalized recommendations.
        </PageDescription>
      </PageHeader>

      <ContentGrid>
        <CalculatorForm onCalculate={handleCalculate} onCalculateV2={handleCalculateV2} loading={loading} />
        <div>{result && <CalculatorResults result={result} />}</div>
      </ContentGrid>
    </CalculatorContainer>
  );
}
