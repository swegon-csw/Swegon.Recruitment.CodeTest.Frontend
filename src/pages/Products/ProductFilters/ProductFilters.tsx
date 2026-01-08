import styled from 'styled-components';
import { FilterOptions } from '@/types/product.types';
import { PRODUCT_CATEGORIES } from '@/utils/constants';
import Input from '@/components/common/Input/Input';
import Dropdown from '@/components/common/Dropdown/Dropdown';

const FiltersContainer = styled.aside`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.xl};
  height: fit-content;
  position: sticky;
  top: 100px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: static;
  }
`;

const FilterTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.heading};
`;

const FilterGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const FilterLabel = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;
`;

interface ProductFiltersProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

export default function ProductFilters({ filters, onFilterChange }: ProductFiltersProps) {
  const handleSearchChange = (value: string) => {
    onFilterChange({ ...filters, search: value });
  };

  const handleCategoryChange = (value: string) => {
    onFilterChange({ ...filters, category: value });
  };

  const handleSortChange = (value: string) => {
    onFilterChange({ ...filters, sortBy: value as FilterOptions['sortBy'] });
  };

  return (
    <FiltersContainer>
      <FilterTitle>Filters</FilterTitle>

      <FilterGroup>
        <FilterLabel htmlFor="search">Search</FilterLabel>
        <Input
          id="search"
          type="text"
          placeholder="Search products..."
          value={filters.search}
          onChange={e => handleSearchChange(e.target.value)}
        />
      </FilterGroup>

      <FilterGroup>
        <FilterLabel htmlFor="category">Category</FilterLabel>
        <Dropdown
          id="category"
          value={filters.category}
          onChange={e => handleCategoryChange(e.target.value)}
          options={PRODUCT_CATEGORIES.map(cat => ({
            value: cat,
            label: cat.charAt(0).toUpperCase() + cat.slice(1),
          }))}
        />
      </FilterGroup>

      <FilterGroup>
        <FilterLabel htmlFor="sortBy">Sort By</FilterLabel>
        <Dropdown
          id="sortBy"
          value={filters.sortBy}
          onChange={e => handleSortChange(e.target.value)}
          options={[
            { value: 'name', label: 'Name' },
            { value: 'price', label: 'Price' },
            { value: 'date', label: 'Date Added' },
          ]}
        />
      </FilterGroup>
    </FiltersContainer>
  );
}
