import styled from 'styled-components';
import { ProductDetail } from '@/types/product.types';
import { formatCurrency } from '@/utils/formatting/currencyFormatter';
import { formatDate } from '@/utils/formatting/dateFormatter';
import Button from '@/components/common/Button/Button';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 1;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoCard = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.xl};
`;

const ProductTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.heading};
`;

const Category = styled.span`
  display: inline-block;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textLight};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Price = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const StockStatus = styled.div<{ $inStock: boolean }>`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme, $inStock }) =>
    $inStock ? theme.colors.successLight : theme.colors.errorLight};
  color: ${({ theme, $inStock }) => ($inStock ? theme.colors.success : theme.colors.error)};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Actions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const MetaInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.875rem;
`;

interface ProductInfoProps {
  product: ProductDetail;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  return (
    <InfoContainer>
      <ImageContainer>
        {product.imageUrl ? (
          <ProductImage src={product.imageUrl} alt={product.name} />
        ) : (
          <span>No Image Available</span>
        )}
      </ImageContainer>

      <InfoCard>
        <Category>{product.category}</Category>
        <ProductTitle>{product.name}</ProductTitle>
        <Price>{formatCurrency(product.price)}</Price>
        <Description>{product.description}</Description>
        <StockStatus $inStock={product.inStock}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </StockStatus>

        <Actions>
          <Button size="large" fullWidth disabled={!product.inStock}>
            <FiShoppingCart /> Add to Cart
          </Button>
          <Button variant="outline" size="large">
            <FiHeart />
          </Button>
        </Actions>

        <MetaInfo>
          <div>Product ID: {product.id}</div>
          <div>Added: {formatDate(product.createdAt)}</div>
          <div>Last Updated: {formatDate(product.updatedAt)}</div>
        </MetaInfo>
      </InfoCard>
    </InfoContainer>
  );
}
