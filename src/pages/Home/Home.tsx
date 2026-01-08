import styled from 'styled-components';
import { FiTrendingUp, FiPackage, FiUsers, FiActivity } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Button from '@/components/common/Button/Button';
import { ROUTES } from '@/utils/constants';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxl};
`;

const Hero = styled.section`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl} 0;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.heading};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Actions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin: ${({ theme }) => theme.spacing.xxl} 0;
`;

const StatCard = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.medium};
    transform: translateY(-4px);
  }
`;

const StatIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: ${({ theme }) => theme.borderRadius.round};
  background-color: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  svg {
    width: 30px;
    height: 30px;
  }
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.heading};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textLight};
`;

const Features = styled.section`
  margin: ${({ theme }) => theme.spacing.xxl} 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.heading};
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
`;

const FeatureCard = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.xl};
`;

const FeatureTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.heading};
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
`;

export default function Home() {
  return (
    <HomeContainer>
      <Hero>
        <Title>Welcome to Swegon Recruitment Portal</Title>
        <Subtitle>
          Explore our comprehensive range of ventilation products and use our advanced calculator
          to find the perfect solution for your needs.
        </Subtitle>
        <Actions>
          <Link to={ROUTES.PRODUCTS}>
            <Button size="large">Browse Products</Button>
          </Link>
          <Link to={ROUTES.CALCULATOR}>
            <Button variant="outline" size="large">
              Try Calculator
            </Button>
          </Link>
        </Actions>
      </Hero>

      <StatsGrid>
        <StatCard>
          <StatIcon>
            <FiPackage />
          </StatIcon>
          <StatValue>250+</StatValue>
          <StatLabel>Products Available</StatLabel>
        </StatCard>
        <StatCard>
          <StatIcon>
            <FiUsers />
          </StatIcon>
          <StatValue>10K+</StatValue>
          <StatLabel>Happy Customers</StatLabel>
        </StatCard>
        <StatCard>
          <StatIcon>
            <FiActivity />
          </StatIcon>
          <StatValue>99.9%</StatValue>
          <StatLabel>Uptime Guaranteed</StatLabel>
        </StatCard>
        <StatCard>
          <StatIcon>
            <FiTrendingUp />
          </StatIcon>
          <StatValue>15+</StatValue>
          <StatLabel>Years Experience</StatLabel>
        </StatCard>
      </StatsGrid>

      <Features>
        <SectionTitle>Why Choose Swegon?</SectionTitle>
        <FeatureGrid>
          <FeatureCard>
            <FeatureTitle>Quality Products</FeatureTitle>
            <FeatureDescription>
              All our products meet the highest quality standards and are tested rigorously to
              ensure optimal performance and reliability.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>Expert Support</FeatureTitle>
            <FeatureDescription>
              Our team of experts is available to help you choose the right products and provide
              technical support whenever you need it.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>Advanced Calculator</FeatureTitle>
            <FeatureDescription>
              Use our sophisticated calculator to determine the exact ventilation requirements for
              your space and get personalized recommendations.
            </FeatureDescription>
          </FeatureCard>
        </FeatureGrid>
      </Features>
    </HomeContainer>
  );
}
