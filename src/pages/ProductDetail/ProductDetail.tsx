import { FiArrowLeft } from "react-icons/fi";
import { useNavigate,useParams } from "react-router-dom";

import Alert from "@/components/common/Alert/Alert";
import Button from "@/components/common/Button/Button";
import Spinner from "@/components/common/Spinner/Spinner";
import { useProductDetail } from "@/hooks/useProductDetail";

import { BackButton, ContentGrid, DetailContainer, LoadingContainer } from "./ProductDetail.styled";
import ProductInfo from "./ProductInfo/ProductInfo";
import ProductSpecs from "./ProductSpecs/ProductSpecs";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { product, loading, error } = useProductDetail(id || "");

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
        <Alert type="error">{error || "Product not found"}</Alert>
        <Button onClick={() => navigate("/products")} style={{ marginTop: "1rem" }}>
          <FiArrowLeft /> Back to Products
        </Button>
      </div>
    );
  }

  return (
    <DetailContainer>
      <BackButton variant="outline" onClick={() => navigate("/products")}>
        <FiArrowLeft /> Back to Products
      </BackButton>

      <ContentGrid>
        <ProductInfo product={product} />
        <ProductSpecs specifications={product.specifications} features={product.features} />
      </ContentGrid>
    </DetailContainer>
  );
}
