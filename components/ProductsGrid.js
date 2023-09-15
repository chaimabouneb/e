import styled from "styled-components";
import ProductBox from "./Card";

const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export default function ProductsGrid() {
  return (
    <StyledProductsGrid>
      <ProductBox />
    </StyledProductsGrid>
  );
}
