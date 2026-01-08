import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Product } from '@/types/product.types';
import { formatCurrency } from '@/utils/formatting/currencyFormatter';
import Button from '@/components/common/Button/Button';

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  overflow: hidden;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.medium};
    transform: translateY(-4px);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
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

const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ProductName = styled.h3`
  font-size: 1.125rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.heading};
`;

const ProductCategory = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textLight};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ProductDescription = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.5;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ProductFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

const ProductPrice = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const StockBadge = styled.span<{ $inStock: boolean }>`
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme, $inStock }) =>
    $inStock ? theme.colors.successLight : theme.colors.errorLight};
  color: ${({ theme, $inStock }) => ($inStock ? theme.colors.success : theme.colors.error)};
  font-weight: 600;
`;

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card>
      <ImageContainer>
        {product.imageUrl ? (
          <ProductImage src={product.imageUrl} alt={product.name} />
        ) : (
          <span>No Image</span>
        )}
      </ImageContainer>
      <CardContent>
        <ProductCategory>{product.category}</ProductCategory>
        <ProductName>{product.name}</ProductName>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductFooter>
          <ProductPrice>{formatCurrency(product.price)}</ProductPrice>
          <StockBadge $inStock={product.inStock}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </StockBadge>
        </ProductFooter>
        <Link to={`/products/${product.id}`} style={{ marginTop: '1rem' }}>
          <Button fullWidth>View Details</Button>
        </Link>
      </CardContent>
    </Card>
  );
}
