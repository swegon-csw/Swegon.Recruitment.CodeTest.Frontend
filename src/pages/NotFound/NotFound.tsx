import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@/components/common/Button/Button';
import { FiHome } from 'react-icons/fi';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl};
`;

const ErrorCode = styled.h1`
  font-size: 8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  line-height: 1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 6rem;
  }
`;

const ErrorTitle = styled.h2`
  font-size: 2rem;
  margin: ${({ theme }) => theme.spacing.lg} 0;
  color: ${({ theme }) => theme.colors.heading};
`;

const ErrorDescription = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textLight};
  max-width: 500px;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export default function NotFound() {
  return (
    <NotFoundContainer>
      <ErrorCode>404</ErrorCode>
      <ErrorTitle>Page Not Found</ErrorTitle>
      <ErrorDescription>
        The page you're looking for doesn't exist or has been moved. Let's get you back on track.
      </ErrorDescription>
      <Link to="/">
        <Button size="large">
          <FiHome /> Go to Homepage
        </Button>
      </Link>
    </NotFoundContainer>
  );
}
