import { Link } from "react-router-dom";

import Button from "@/components/common/Button/Button";
import { Product } from "@/types/product.types";
import { formatCurrency } from "@/utils/formatting/currencyFormatter";

import {
  Card,
  CardContent,
  ImageContainer,
  ProductCategory,
  ProductDescription,
  ProductFooter,
  ProductImage,
  ProductName,
  ProductPrice,
  StockBadge,
} from "./ProductCard.styled";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card>
      <ImageContainer>
        {product.imageUrl ? <ProductImage src={product.imageUrl} alt={product.name} /> : <span>No Image</span>}
      </ImageContainer>
      <CardContent>
        <ProductCategory>{product.category}</ProductCategory>
        <ProductName>{product.name}</ProductName>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductFooter>
          <ProductPrice>{formatCurrency(product.price)}</ProductPrice>
          <StockBadge $inStock={product.inStock}>{product.inStock ? "In Stock" : "Out of Stock"}</StockBadge>
        </ProductFooter>
        <Link to={`/products/${product.id}`} style={{ marginTop: "1rem" }}>
          <Button fullWidth>View Details</Button>
        </Link>
      </CardContent>
    </Card>
  );
}
