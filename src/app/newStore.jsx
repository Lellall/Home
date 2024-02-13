import styled from "styled-components";
import { Footer, Navbar } from "../features";
import SliderComponent from "../features/newshop/newShop";
import { MultipleProducts } from "../StoreSlide";
import CategoriesList from "./categoriesItems";
import General from "../features/newshop/general";
import SubCategory from "./subCategories";
import { useNavigate } from "react-router-dom";
import useProductStore from "./productStore";
import { useEffect, useRef, useState } from "react";
import ReusableCard from "../features/newshop/card";
import InfiniteScroll from "react-infinite-scroll-component";
import { ColorRing } from "react-loader-spinner";

const TopSnacker = styled.div`
  display: flex;
  flex: 1;
  // justify-content: space-between;
  width: 100vw;
  margin: 10px 15px;
`;

const TopSnackerColor = styled.div`
  width: 20px;
  border-radius: 4px;
  background: #ffb000;
  color: transparent;
  height: 30px;
  margin-bottom: 20px;
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin: 20px 40px;
  width: 100vw;
  @media (max-width: 912px) {
    margin: 20px 0px;
  }
`;
const Categories = styled.div`
  width: 20%;
  position: fixed;
  box-sizing: border-box;
  // min-height: 100vh;
  background: #fff;
  top: 10rem;
  // z-index: -1;
  backround: red;
  @media (max-width: 912px) {
    display: none; // Hide the component on screens with a width of 768 pixels or smaller
  }
`;
const Products = styled.div`
  width: 71%;
  margin-right: 90px;
  margin-left: 21%;
  // margin-bottom: 10000px
  backround: red;
  min-height: 100vh;
  @media (max-width: 912px) {
    width: 100%;
     margin-left: 0;
    //  overflow-x: hidden;
  }
`;

const Cover = styled.div`
  margin-top: 50px;
  margin-bottom: 150px;
  padding: 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 912px) {
   padding:0;
  }
`;
const Picks = styled.div`
  margin: 10px auto;
  width: 100%;
`;
const ContainerInf = styled.div`
  display: flex;
  justify-content: center; /* Center the content horizontally */
  margin: 20px 0px;
  @media (max-width: 912px) {
    width: 100%;
    overflow-x: hidden;
    //  margin-left: -20px;
  }
  @media (max-width: 412px) {
    // width: 100%;
     margin-left: 0;
  }
  @media (max-width: 360px) {
    width: 100%;
    //  margin-left: -20px;
  }
  
`;

const NewStore = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const products = useProductStore((state) => state.products);
  const fetchProducts = useProductStore((state) => state.fetchProducts);

  useEffect(() => {
    loadNextPage();
  }, []);

  const loadNextPage = async () => {
    try {
      await fetchProducts(page);
      setPage(page + 1);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleAddToWishlist = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "10rem" }}></div>
      <Container>
        <Categories>
          <CategoriesList />
        </Categories>
        <Products>
          <div>
            <MultipleProducts />
          </div>
          <ContainerInf>
            <InfiniteScroll
              style={{ float: "center" }}
              dataLength={products.length}
              next={loadNextPage}
              hasMore={hasMore}
              loader={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // height: "10vh",
                  }}
                >
                  <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="color-ring-loading"
                    wrapperStyle={{ float: "center" }}
                    wrapperClass="color-ring-wrapper"
                    colors={[
                      "#e15b64",
                      "#f47e60",
                      "#f8b26a",
                      "#abbd81",
                      "#849b87",
                    ]}
                  />
                </div>
              }
              endMessage={<p>No more products</p>}
            >
              <Cover>
                {products.map((product, index) => (
                  <ReusableCard
                    key={index}
                    title={product?.name}
                    price={product?.price}
                    discount="20% OFF"
                    imageUrl={product?.imageUrl}
                    onAddToWishlist={() => navigate(`product/${product?.id}`)}
                  />
                ))}
              </Cover>
            </InfiniteScroll>
          </ContainerInf>
        </Products>
      </Container>
      {/* <div>
        <div style={{ margin: "1px 20px" }}>
          <TopSnacker>
            <TopSnackerColor>heeo</TopSnackerColor>
            <div
              style={{
                marginLeft: "15px",
                fontSize: "12px",
                fontWeight: "400",
                color: "#004225",
              }}
            >
              Category
            </div>
          </TopSnacker>
          <div
            style={{
              marginLeft: "15px",
              fontSize: "18px",
              fontWeight: "400",
              color: "#004225",
            }}
          >
            Browse By Shop Category
          </div>
          <SubCategory />
          <TopSnacker>
            <TopSnackerColor>heeo</TopSnackerColor>
            <div
              style={{
                marginLeft: "10px",
                fontSize: "13px",
                fontWeight: "400",
                color: "#004225",
              }}
            >
              This Month's Pick
            </div>
          </TopSnacker>
        </div>
        <Picks>
          <General dislay={4} />
          <TopSnacker>
            <TopSnackerColor>heeo</TopSnackerColor>
            <div
              style={{
                marginLeft: "10px",
                fontSize: "13px",
                fontWeight: "400",
                color: "#004225",
              }}
            >
              Top Vendors this week
            </div>
          </TopSnacker>
        </Picks>
      </div> */}
      <div style={{ marginTop: "5rem" }}>
        <Footer style={{zIndex:"2"}} />
      </div>
    </>
  );
};

export default NewStore;
