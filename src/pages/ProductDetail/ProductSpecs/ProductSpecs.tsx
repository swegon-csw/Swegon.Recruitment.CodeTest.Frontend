import { ProductSpecification } from "@/types/product.types";

import {
  Card,
  FeatureItem,
  FeatureList,
  SectionTitle,
  SpecList,
  SpecName,
  SpecRow,
  SpecsContainer,
  SpecValue,
} from "./ProductSpecs.styled";

interface ProductSpecsProps {
  specifications: ProductSpecification[];
  features: string[];
}

export default function ProductSpecs({ specifications, features }: ProductSpecsProps) {
  return (
    <SpecsContainer>
      <Card>
        <SectionTitle>Specifications</SectionTitle>
        <SpecList>
          {specifications.map((spec, index) => (
            <SpecRow key={index}>
              <SpecName>{spec.name}</SpecName>
              <SpecValue>
                {spec.value} {spec.unit}
              </SpecValue>
            </SpecRow>
          ))}
        </SpecList>
      </Card>

      <Card>
        <SectionTitle>Features</SectionTitle>
        <FeatureList>
          {features.map((feature, index) => (
            <FeatureItem key={index}>{feature}</FeatureItem>
          ))}
        </FeatureList>
      </Card>
    </SpecsContainer>
  );
}
