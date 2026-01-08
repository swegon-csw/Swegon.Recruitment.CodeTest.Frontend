import { useState } from 'react';
import styled from 'styled-components';
import { useProducts } from '@/hooks/useProducts';
import { FilterOptions } from '@/types/product.types';
import ProductList from './ProductList/ProductList';
import ProductFilters from './ProductFilters/ProductFilters';
import Spinner from '@/components/common/Spinner/Spinner';
import Alert from '@/components/common/Alert/Alert';

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const PageTitle = styled.h1`
  color: ${({ theme }) => theme.colors.heading};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const PageDescription = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1.125rem;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  
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

export default function Products() {
  const [filters, setFilters] = useState<FilterOptions>({
    search: '',
    category: 'all',
    sortBy: 'name',
  });
  const [currentPage, setCurrentPage] = useState(1);

  const { products, loading, error, totalPages } = useProducts(filters, currentPage);

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  if (loading) {
    return (
      <LoadingContainer>
        <Spinner />
      </LoadingContainer>
    );
  }

  if (error) {
    return <Alert type="error">{error}</Alert>;
  }

  return (
    <ProductsContainer>
      <div>
        <PageTitle>Products</PageTitle>
        <PageDescription>
          Browse our comprehensive range of ventilation products. Use filters to find exactly what
          you need.
        </PageDescription>
      </div>

      <ContentWrapper>
        <ProductFilters filters={filters} onFilterChange={handleFilterChange} />
        <ProductList
          products={products}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </ContentWrapper>
    </ProductsContainer>
  );
}
