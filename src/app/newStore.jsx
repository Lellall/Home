import styled from "styled-components";
import { Navbar } from "../features";
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
`;
const Categories = styled.div`
  width: 20%;
  backround: red;
  border-right: 1px solid #ccc;
`;
const Products = styled.div`
  width: 80%;
  backround: red;
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
          <div style={{ marginRight: "100px", marginBottom: "20px" }}>
          {/* <TopSnacker>
              <TopSnackerColor>heeo</TopSnackerColor>
              <div
                style={{
                  marginLeft: "10px",
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#004225",
                }}
              >
                Today's Pick
              </div>
            </TopSnacker> */}
            <MultipleProducts />
          </div>
          <div style={{ marginRight: "90px" }}>
           
            <SliderComponent dislay={4} />
          </div>
        </Products>
        
      </Container>
      <div>
      <div style={{ margin: "1px 20px", }}>
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
                Browse By Category
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
            <div style={{ margin: "20px 20px", width:'100%' }}>
           
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
          </div>
      </div>
    </>
  );
};

export default NewStore;
