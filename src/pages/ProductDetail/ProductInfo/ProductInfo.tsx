import { FiHeart,FiShoppingCart } from "react-icons/fi";

import Button from "@/components/common/Button/Button";
import { ProductDetail } from "@/types/product.types";
import { formatCurrency } from "@/utils/formatting/currencyFormatter";
import { formatDate } from "@/utils/formatting/dateFormatter";

import {
  Actions,
  Category,
  Description,
  ImageContainer,
  InfoCard,
  InfoContainer,
  MetaInfo,
  Price,
  ProductImage,
  ProductTitle,
  StockStatus,
} from "./ProductInfo.styled";

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
        <StockStatus $inStock={product.inStock}>{product.inStock ? "In Stock" : "Out of Stock"}</StockStatus>

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
