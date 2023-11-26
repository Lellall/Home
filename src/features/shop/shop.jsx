import styled from "styled-components";
// import { Container, Typography, Button } from "@mui/material";

// const StyledP = styled.p`
//   font-family: Open Sans;
//   font-size: 30px;
// `;

const ProductContainer = styled.div`
  display: flex;
  padding: 28.203px 17.627px;
  align-items: flex-start;
  gap: 17.627px;
  border-radius: 7.932px;
  background: #fcfcfc;
  // background: red;

  p {
    margin: 0;
  }
`;

const Product = styled.div`3
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 21px;
  align-self: stretch;
  width: 265px;
`;

const ProductName = styled.p`
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 600;
`;
const ProductCategory = styled.p`
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 400;
`;
const ProductPrice = styled.p`
  font-family: Raleway;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  text-transform: capitalize;
`;
const ProductDescription = styled.p`
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const ProductImage = styled.div`
  width: 265px;
  height: 265px;
  background: url(${(props) => props.BG});
  background-repeat: no-repeat;
  position: relative;
  border-radius: 8px;

  div {
    display: flex;
    width: 40px;
    height: 40px;
    padding: 8px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    position: absolute;
    right: 18px;
    bottom: 18px;
    // left: 631px;
    // top: 235.25px;
    border-radius: 100px;
    // background: red;
    background: #fff;
  }
`;

const Products = styled.div`
  display: flex;
  flex-direction: row;
  // width: 1440px;
  padding: 0px 80px;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const ProductDetails = styled.div`
  display: flex;
  height: 510px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  // background: red;

  .spacer {
    display: flex;
    height: 60px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    align-self: stretch;
  }
`;
const StoreBanner = styled.div`
  // display: flex;
  // flex: 1 0 0;
  // align-self: stretch;
  // background: url(${(props) =>
    props.shopBG}), lightgray 50% / cover no-repeat;
  background: url(${(props) => props.shopBG});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: lightgray;
  position: relative;
  height: 480px;
  width: 100%;

  p {
    margin: 0;
  }

  .store-status {
    // display: flex;
    width: 92px;
    padding: 10px 20px;
    // justify-content: space-between;
    // align-items: flex-start;
    border-radius: 8px;
    position: absolute;
    right: 75px;
    background: #f3f3f8;
    top: 36px;

    p {
      color: #00a661;
      text-align: center;
      // font-feature-settings: 'clig' off, 'liga' off;
      font-family: Raleway;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 23px;
    }
  }

  .store-details {
    display: flex;
    // width: 1286px;
    width: calc(100vw - 11%);
    margin: 0 auto;
    position: absolute;
    bottom: 36px;
    left: 0;
    right: 0;
    padding: 15px 40px;
    justify-content: space-between;
    align-items: center;
    border-radius: 73px;
    background: #fff;
    // height: 85px;
  }

  .store-logo {
    display: flex;
    align-items: center;
    gap: 15px;

    p {
      font-family: Raleway;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 35px;
    }
  }

  .store-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .detail {
      font-family: Raleway !important;
      font-size: 20px !important;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    .info {
      font-family: Open Sans !important;
      font-size: 15px !important;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: #aaa;
    }
  }
`;
const SubBanner = styled.div`
  background: url("/assets/background.svg");
  background-repeat: no-repeat;
  // background-repeat: repeat-x;
  background-size: cover;
  background-color: lightgray;
  position: relative;
  height: 270px;
  width: 100%;
  object-fit: contain;

`;
const Stores = styled.div`
  display: flex !important;
  flex-direction: row !important;
  padding: 0px 80px 40px 80px;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  flex-wrap: wrap;
  // width: 100%;
`;

const StoreDetails = styled.div`
  display: flex;
  padding: 28px 18px !important;
  align-items: flex-start;
  gap: 18px;
  border-radius: 8px;
  border: 1.763px solid #f0f0f0;
  background: #fff;
  box-shadow: 8.81344px 12.33882px 35.25377px 0px rgba(32, 56, 85, 0.08);
`;

const Store = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 21.152px;
  width: 265px !important;

  p {
    margin: 0;
  }

  .details {
    display: flex;
    width: 266.166px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8.813px;

    .name {
      color: #2f313f;
      // font-feature-settings: 'clig' off, 'liga' off;
      font-family: Open Sans;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 22.915px;
    }
    .rating {
      display: flex;
      justify-content: space-between;
      align-items: center;
      align-self: stretch;
    }
    .category {
      color: rgba(18, 29, 43, 0.6);
      // font-feature-settings: 'clig' off, 'liga' off;
      font-family: Open Sans;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 22.915px;
    }
  }
`;
const StoreImage = styled.div`
  width: 265px;
  height: 265px;
  background: url(${(props) => props.BG});
  background-repeat: no-repeat;
  position: relative;
  border-radius: 8px;

  .status {
    display: flex;
    padding: 8.813px 17.627px;
    align-items: flex-start;
    gap: 17.627px;
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 0px 7.051px 7.051px 7.051px;
    background: var(--secondary-background-color, #f3f3f8);

    p {
      color: ${(props) => (props.isOpen ? "#00A661" : "#E41749")};
      text-align: right;
      font-feature-settings: "clig" off, "liga" off;
      font-family: Raleway;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 22.915px; /* 130% */
    }
  }

  .fav {
    // display: flex;
    // width: 40px;
    // height: 40px;
    // padding: 8px;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    // gap: 8px;
    position: absolute;
    right: 24px;
    bottom: 18px;
    // left: 631px;
    // top: 235.25px;
    border-radius: 176.269px;
    // background: red;
    background: #fff;

    display: flex;
    width: 70.508px;
    height: 70.508px;
    // padding: 13px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 13px;
  }
`;
const Main = () => {
  return (
    <div>
            <StoreBanner shopBG="assets/store-logo.jpg">
        <div className="store-status">
          <p>Open</p>
        </div>
        <div className="store-details">
          <div className="store-logo">
            <img src="/assets/Logo.png" alt="store-logo" />
            <p>Domino’s Pizzza</p>
          </div>
          <div className="store-info">
            <p className="info">Estimated Delivery Time</p>
            <p className="detail">35 - 45 Minutes</p>
          </div>
          <div className="store-info">
            <p className="info">Open / Close Time</p>
            <p className="detail">9am - 8pm</p>
          </div>
          <div className="store-info">
            <p className="info">Minimum Price</p>
            <p className="detail">₦1,400</p>
          </div>
        </div>
      </StoreBanner>
      <SubBanner />
      <Products>
        <ProductContainer>
          <ProductDetails>
            <Product>
              <ProductImage BG="assets/Image.png">
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
                <ProductName>Pizza Delight</ProductName>
                <ProductCategory>Health</ProductCategory>
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
                <ProductPrice>₦2,400</ProductPrice>
                <ProductDescription>
                  Timex Mens Easy Reader Day-Date Expansion Band Watch
                </ProductDescription>
              </div>
            </Product>
            <div className="spacer"></div>
          </ProductDetails>
        </ProductContainer>
        <ProductContainer>
          <ProductDetails>
            <Product>
              <ProductImage BG="assets/Image.png">
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
                <ProductName>Pizza Delight</ProductName>
                <ProductCategory>Health</ProductCategory>
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
                <ProductPrice>₦2,400</ProductPrice>
                <ProductDescription>
                  Timex Mens Easy Reader Day-Date Expansion Band Watch
                </ProductDescription>
              </div>
            </Product>
            <div className="spacer"></div>
          </ProductDetails>
        </ProductContainer>
        <ProductContainer>
          <ProductDetails>
            <Product>
              <ProductImage BG="assets/Image.png">
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
                <ProductName>Pizza Delight</ProductName>
                <ProductCategory>Health</ProductCategory>
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
                <ProductPrice>₦2,400</ProductPrice>
                <ProductDescription>
                  Timex Mens Easy Reader Day-Date Expansion Band Watch
                </ProductDescription>
              </div>
            </Product>
            <div className="spacer"></div>
          </ProductDetails>
        </ProductContainer>
        <ProductContainer>
          <ProductDetails>
            <Product>
              <ProductImage BG="assets/Image.png">
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
                <ProductName>Pizza Delight</ProductName>
                <ProductCategory>Health</ProductCategory>
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
                <ProductPrice>₦2,400</ProductPrice>
                <ProductDescription>
                  Timex Mens Easy Reader Day-Date Expansion Band Watch
                </ProductDescription>
              </div>
            </Product>
            <div className="spacer"></div>
          </ProductDetails>
        </ProductContainer>
      </Products>

      <Stores>
        <StoreDetails>
          <Store>
            <StoreImage BG="assets/Image.png" isOpen={true}>
              <div className="status">
                <p>Open</p>
              </div>
              <div className="fav">
                <img
                  src="assets/fav.svg"
                  style={{ width: "27px", height: "24px", flexShrink: 0 }}
                />
              </div>
            </StoreImage>
            <div className="details">
              <p className="name">Boutique</p>
              <div className="rating">
                <p className="category">Health</p>
              </div>
            </div>
          </Store>
        </StoreDetails>
        <StoreDetails>
          <Store>
            <StoreImage BG="assets/Image.png" isOpen={true}>
              <div className="status">
                <p>Open</p>
              </div>
              <div className="fav">
                <img
                  src="assets/fav.svg"
                  style={{ width: "27px", height: "24px", flexShrink: 0 }}
                />
              </div>
            </StoreImage>
            <div className="details">
              <p className="name">Boutique</p>
              <div className="rating">
                <p className="category">Health</p>
              </div>
            </div>
          </Store>
        </StoreDetails>
        <StoreDetails>
          <Store>
            <StoreImage BG="assets/Image.png" isOpen={false}>
              <div className="status">
                <p>Closed</p>
              </div>
              <div className="fav">
                <img
                  src="assets/fav.svg"
                  style={{ width: "27px", height: "24px", flexShrink: 0 }}
                />
              </div>
            </StoreImage>
            <div className="details">
              <p className="name">Boutique</p>
              <div className="rating">
                <p className="category">Healthzzz</p>
              </div>
            </div>
          </Store>
        </StoreDetails>
        <StoreDetails>
          <Store>
            <StoreImage BG="assets/Image.png" isOpen={false}>
              <div className="status">
                <p>Closed</p>
              </div>
              <div className="fav">
                <img
                  src="assets/fav.svg"
                  style={{ width: "27px", height: "24px", flexShrink: 0 }}
                />
              </div>
            </StoreImage>
            <div className="details">
              <p className="name">Boutique</p>
              <div className="rating">
                <p className="category">Health</p>
              </div>
            </div>
          </Store>
        </StoreDetails>
      </Stores>
    </div>
  )
}

export default Main