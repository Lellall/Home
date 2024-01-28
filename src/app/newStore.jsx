import styled from "styled-components";
import { Footer, Navbar } from "../features";
import SliderComponent from "../features/newshop/newShop";
import { MultipleProducts } from "../StoreSlide";
import CategoriesList from "./categoriesItems";
import General from "../features/newshop/general";
import SubCategory from "./subCategories";

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
  backround: red;
  @media (max-width: 912px) {
    display: none; // Hide the component on screens with a width of 768 pixels or smaller
  }
`;
const Products = styled.div`
  width: 71%;
  margin-right: 90px;
  // margin-bottom: 10000px
  backround: red;
  @media (max-width: 912px) {
    width: 100%;
  }
`;

const Cover = styled.div`
  margin-top: 50px;
  width: 100%;
`;
const Picks = styled.div`
  margin: 10px auto;
  width: 100%;
`;

const NewStore = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Categories>
          <CategoriesList />
        </Categories>
        <Products>
          <div>
            <MultipleProducts />
          </div>
          <Cover>
            <SliderComponent dislay={4} />
          </Cover>
        </Products>
      </Container>
      <div>
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
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default NewStore;
