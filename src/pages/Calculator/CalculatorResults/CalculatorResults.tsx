import styled from 'styled-components';
import { CalculationResult } from '@/types/calculation.types';
import { formatNumber } from '@/utils/formatting/numberFormatter';
import { formatCurrency } from '@/utils/formatting/currencyFormatter';
import { FiWind, FiThermometer, FiZap, FiDollarSign } from 'react-icons/fi';

const ResultsCard = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const ResultsTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.heading};
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const MetricCard = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const MetricIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

const MetricContent = styled.div`
  flex: 1;
`;

const MetricLabel = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 0.25rem;
`;

const MetricValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.heading};
`;

const RecommendationsSection = styled.div`
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const RecommendationsTitle = styled.h3`
  font-size: 1.125rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.heading};
`;

const RecommendationsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const RecommendationItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  
  &::before {
    content: '•';
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    font-size: 1.25rem;
  }
`;

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
            <MetricValue>{formatNumber(result.airflowRate)} m³/h</MetricValue>
          </MetricContent>
        </MetricCard>

        <MetricCard>
          <MetricIcon>
            <FiThermometer />
          </MetricIcon>
          <MetricContent>
            <MetricLabel>Heating Capacity</MetricLabel>
            <MetricValue>{formatNumber(result.heatingCapacity)} kW</MetricValue>
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
            <MetricLabel>Estimated Cost</MetricLabel>
            <MetricValue>{formatCurrency(result.estimatedCost)}/year</MetricValue>
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
