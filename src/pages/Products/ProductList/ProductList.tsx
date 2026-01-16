import { Product } from "@/types/product.types";

import ProductCard from "../ProductCard/ProductCard";
import { EmptyState, ListContainer, ProductGrid } from "./ProductList.styled";

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
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
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </ListContainer>
  );
}
