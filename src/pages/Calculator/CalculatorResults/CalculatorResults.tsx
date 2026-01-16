import { FiDollarSign,FiThermometer, FiWind, FiZap } from "react-icons/fi";

import { CalculationResult } from "@/types/calculation.types";
import { formatCurrency } from "@/utils/formatting/currencyFormatter";
import { formatNumber } from "@/utils/formatting/numberFormatter";

import {
  MetricCard,
  MetricContent,
  MetricIcon,
  MetricLabel,
  MetricsGrid,
  MetricValue,
  RecommendationItem,
  RecommendationsList,
  RecommendationsSection,
  RecommendationsTitle,
  ResultsCard,
  ResultsTitle,
} from "./CalculatorResults.styled";

interface CalculatorResultsProps {
  result: CalculationResult;
}

export default function CalculatorResults({ result }: CalculatorResultsProps) {
  return (
    <ResultsCard>
      <ResultsTitle>Calculation Results</ResultsTitle>

      <MetricsGrid>
        <MetricCard>
          <MetricIcon>
            <FiWind />
          </MetricIcon>
          <MetricContent>
            <MetricLabel>Airflow Rate</MetricLabel>
            <MetricValue>{formatNumber(result.airflow)} m³/s</MetricValue>
          </MetricContent>
        </MetricCard>

        <MetricCard>
          <MetricIcon>
            <FiThermometer />
          </MetricIcon>
          <MetricContent>
            <MetricLabel>Heating Capacity</MetricLabel>
            <MetricValue>{formatNumber(result.heatingCapacity)} W</MetricValue>
          </MetricContent>
        </MetricCard>

        <MetricCard>
          <MetricIcon>
            <FiZap />
          </MetricIcon>
          <MetricContent>
            <MetricLabel>Energy Consumption</MetricLabel>
            <MetricValue>{formatNumber(result.energyConsumption)} kWh/year</MetricValue>
          </MetricContent>
        </MetricCard>

        <MetricCard>
          <MetricIcon>
            <FiDollarSign />
          </MetricIcon>
          <MetricContent>
            <MetricLabel>Annual Cost</MetricLabel>
            <MetricValue>{formatCurrency(result.cost.annual)}/year</MetricValue>
          </MetricContent>
        </MetricCard>
      </MetricsGrid>

      <RecommendationsSection>
        <RecommendationsTitle>Recommendations</RecommendationsTitle>
        <RecommendationsList>
          {result.recommendations.map((recommendation, index) => (
            <RecommendationItem key={index}>{recommendation}</RecommendationItem>
          ))}
        </RecommendationsList>
      </RecommendationsSection>
    </ResultsCard>
  );
}
