import Grid from "@mui/material/Grid";
import { useEffect } from 'react';
// import { useShopController } from '../use-shop-controller';
import { Banner, ShopCard } from "../components";
import {
  MainContainer,
  Heading,
  CategoryButton,
  ShopsContainer,
  EarnContainer,
  SubText,
  ButtonContainer,
  EarnButton,
  PopularShops,
  Title,
  RecommendationsContainer,
} from "./shops.styles";
import axios from 'axios';
const Main = () => {
  const data = [
    {
      id: 1,
      active: true,
      category: "Groceries",
      name: "Milk",
    },
    {
      id: 2,
      active: true,
      category: "Groceries",
      name: "Milk",
    },
    {
      id: 3,
      active: false,
      category: "Groceries",
      name: "Milk",
    },
    {
      id: 4,
      active: true,
      category: "Groceries",
      name: "Milk",
    },
    {
      id: 5,
      active: false,
      category: "Groceries",
      name: "Milk",
    },
    {
      id: 6,
      active: false,
      category: "Groceries",
      name: "Milk",
    },
    {
      id: 7,
      active: false,
      category: "Groceries",
      name: "Milk",
    },
    {
      id: 8,
      active: true,
      category: "Groceries",
      name: "Milk",
    },
  ];
  // const { shops } = useShopController()
  const customers = ["Become a Vendor", "Become a Driver"];

  // console.log({shops})

  useEffect(() => {
    // fetch("http://api.dev.lellall.com/shops").then(res => console.log(res)).catch(err => console.log(err))
    axios.get("http://api.dev.lellall.com/shops").then(res => console.log(res))
  }, [])
  
  return (
    <>
      <Banner />
      <MainContainer>
        <div className="category-container">
          <Heading>What do you want to buy?</Heading>
          <CategoryButton>Choose a Category</CategoryButton>
        </div>
        <ShopsContainer>
          <div className="title-container">
            <p className="title">All Shops</p>
            <p className="link">View all</p>
          </div>
          <div className="shops-container">
            <Grid
              container
              rowSpacing={{ xs: 2, sm: 3, md: 5 }}
              spacing={{ xs: 2, sm: 4, md: 4 }}
            >
              {data.map((shop) => (
                <Grid item xs={6} sm={4} md={4} lg={3} key={shop.id}>
                  <ShopCard shop={shop} />
                </Grid>
              ))}
            </Grid>
          </div>
        </ShopsContainer>
      </MainContainer>

      <EarnContainer>
        <div className="sub-container">
          <div className="text-container">
            <Heading>Earn With Us</Heading>
            <SubText>
              Become your own boss, register as a vendor or a courier and earn
              with Léllall!
            </SubText>
          </div>
          <ButtonContainer>
            {customers.map((customer, i) => (
              <EarnButton key={i}>{customer} </EarnButton>
            ))}
          </ButtonContainer>
        </div>
      </EarnContainer>
      <PopularShops>
        <div className="title-container">
          <Title color="#000">Popular Shops</Title>
          <p className="link">View all</p>
        </div>
        <div className="shops-container">
          <Grid
            container
            rowSpacing={{ xs: 2, sm: 5, md: 5 }}
            spacing={{ xs: 2, sm: 4, md: 4 }}
          >
            {data.map((shop) => (
              <Grid item xs={6} sm={4} md={4} lg={3} key={shop.id}>
                <ShopCard shop={shop} />
              </Grid>
            ))}
          </Grid>
        </div>
        <div className="link-container">
          <p>View all</p>
        </div>
      </PopularShops>

      <RecommendationsContainer>
        <div className="title-container">
          <Title color="#2F313F">Recommendations</Title>
        </div>
      </RecommendationsContainer>
    </>
  );
};

export default Main;
