import styled from 'styled-components';
import { Product } from '@/types/product.types';
import ProductCard from '../ProductCard/ProductCard';
import Button from '@/components/common/Button/Button';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const PageInfo = styled.span`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.875rem;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl};
  color: ${({ theme }) => theme.colors.textLight};
`;

interface ProductListProps {
  products: Product[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function ProductList({
  products,
  currentPage,
  totalPages,
  onPageChange,
}: ProductListProps) {
  if (products.length === 0) {
    return (
      <EmptyState>
        <h3>No products found</h3>
        <p>Try adjusting your filters to find what you're looking for.</p>
      </EmptyState>
    );
  }

  return (
    <ListContainer>
      <ProductGrid>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>

      {totalPages > 1 && (
        <PaginationContainer>
          <Button
            variant="outline"
            size="small"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FiChevronLeft />
            Previous
          </Button>
          <PageInfo>
            Page {currentPage} of {totalPages}
          </PageInfo>
          <Button
            variant="outline"
            size="small"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
            <FiChevronRight />
          </Button>
        </PaginationContainer>
      )}
    </ListContainer>
  );
}
