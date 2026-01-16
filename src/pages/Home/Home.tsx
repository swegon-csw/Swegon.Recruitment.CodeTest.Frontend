import { FiActivity, FiPackage, FiTrendingUp, FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";

import Button from "@/components/common/Button/Button";
import { ROUTES } from "@/utils/constants";

import {
  Actions,
  FeatureCard,
  FeatureDescription,
  FeatureGrid,
  Features,
  FeatureTitle,
  Hero,
  HomeContainer,
  SectionTitle,
  StatCard,
  StatIcon,
  StatLabel,
  StatsGrid,
  StatValue,
  Subtitle,
  Title,
} from "./Home.styled";

export default function Home() {
  return (
    <HomeContainer>
      <Hero>
        <Title>Welcome to Swegon Recruitment Portal</Title>
        <Subtitle>
          Explore our comprehensive range of ventilation products and use our advanced calculator to find the perfect
          solution for your needs.
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
              All our products meet the highest quality standards and are tested rigorously to ensure optimal
              performance and reliability.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>Expert Support</FeatureTitle>
            <FeatureDescription>
              Our team of experts is available to help you choose the right products and provide technical support
              whenever you need it.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>Advanced Calculator</FeatureTitle>
            <FeatureDescription>
              Use our sophisticated calculator to determine the exact ventilation requirements for your space and get
              personalized recommendations.
            </FeatureDescription>
          </FeatureCard>
        </FeatureGrid>
      </Features>
    </HomeContainer>
  );
}
