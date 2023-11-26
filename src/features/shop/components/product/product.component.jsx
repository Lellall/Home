/* eslint-disable react/prop-types */
import {
  ProductContainer,
  ProductDetails,
  ProductImage,
  ProductName,
  ProductCategory,
  ProductPrice,
  ProductDescription,
} from "./product.styles";
const Product = ({ product }) => {
  return (
    <ProductContainer>
      <ProductDetails>
        <Product>
          <ProductImage BG={product?.image}>
            <div>
              <img src="assets/fav.svg" />
            </div>
          </ProductImage>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              alignSelf: "stretch",
            }}
          >
            <ProductName>{product?.name}</ProductName>
            <ProductCategory>{product?.category}</ProductCategory>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "5px",
              alignSelf: "stretch",
            }}
          >
            <ProductPrice>{product?.price}</ProductPrice>
            <ProductDescription>
            {product?.description}
            </ProductDescription>
          </div>
        </Product>
        <div className="spacer"></div>
      </ProductDetails>
    </ProductContainer>
  );
};

export default Product;
