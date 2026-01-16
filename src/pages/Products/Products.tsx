import { useState } from "react";

import Alert from "@/components/common/Alert/Alert";
import Spinner from "@/components/common/Spinner/Spinner";
import { useProducts } from "@/hooks/useProducts";
import { FilterOptions } from "@/types/product.types";

import ProductFilters from "./ProductFilters/ProductFilters";
import ProductList from "./ProductList/ProductList";
import { ContentWrapper, LoadingContainer,PageDescription, PageTitle, ProductsContainer } from "./Products.styled";

export default function Products() {
  const [filters, setFilters] = useState<FilterOptions>({
    search: "",
    category: "all",
    sortBy: "name",
  });

  const { products, loading, error } = useProducts(filters);

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
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
          Browse our comprehensive range of ventilation products. Use filters to find exactly what you need.
        </PageDescription>
      </div>

      <ContentWrapper>
        <ProductFilters filters={filters} onFilterChange={handleFilterChange} />
        <ProductList products={products} />
      </ContentWrapper>
    </ProductsContainer>
  );
}
