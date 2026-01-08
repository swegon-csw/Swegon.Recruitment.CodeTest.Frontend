import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useProductDetail } from '@/hooks/useProductDetail';
import ProductInfo from './ProductInfo/ProductInfo';
import ProductSpecs from './ProductSpecs/ProductSpecs';
import Spinner from '@/components/common/Spinner/Spinner';
import Alert from '@/components/common/Alert/Alert';
import Button from '@/components/common/Button/Button';
import { FiArrowLeft } from 'react-icons/fi';

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const BackButton = styled(Button)`
  align-self: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
`;

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { product, loading, error } = useProductDetail(id || '');

  if (loading) {
    return (
      <LoadingContainer>
        <Spinner />
      </LoadingContainer>
    );
  }

  if (error || !product) {
    return (
      <div>
        <Alert type="error">{error || 'Product not found'}</Alert>
        <Button onClick={() => navigate('/products')} style={{ marginTop: '1rem' }}>
          <FiArrowLeft /> Back to Products
        </Button>
      </div>
    );
  }

  return (
    <DetailContainer>
      <BackButton variant="outline" onClick={() => navigate('/products')}>
        <FiArrowLeft /> Back to Products
      </BackButton>

      <ContentGrid>
        <ProductInfo product={product} />
        <ProductSpecs specifications={product.specifications} features={product.features} />
      </ContentGrid>
    </DetailContainer>
  );
}
