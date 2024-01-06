import Grid from "@mui/material/Grid";
import { useEffect, useState, useRef } from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { Banner, ShopCard, CategoryCard, MiniShopCard } from "../components";
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
import { Modal } from "../../ui";
import { useResponsiveValue } from "../../../lib/use-responsive-value";
import axios from "axios";
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
  const customers = ["Become a Vendor", "Become a Driver"];

  const categories = [
    {
      id: 1,
      name: "Vegetables & Fruits",
      image: "/assets/Image.png",
    },
    {
      id: 2,
      name: "Beverages",
      image: "/assets/Image.png",
    },
    {
      id: 3,
      name: "Frozen foods",
      image: "/assets/Image.png",
    },
    {
      id: 4,
      name: "Groceries & Staples",
      image: "/assets/Image.png",
    },
    {
      id: 5,
      name: "Meats & Seafoods",
      image: "/assets/Image.png",
    },
    {
      id: 6,
      name: "Breakfast & Dairy",
      image: "/assets/Image.png",
    },
    {
      id: 7,
      name: "Electronics",
      image: "/assets/Image.png",
    },
    {
      id: 8,
      name: "Phones & Accessories",
      image: "/assets/Image.png",
    },
    {
      id: 9,
      name: "Women’s Fashion",
      image: "/assets/Image.png",
    },
    {
      id: 10,
      name: "Men’s Fashion",
      image: "/assets/Image.png",
    },
    {
      id: 11,
      name: "Kids",
      image: "/assets/Image.png",
    },
    {
      id: 12,
      name: "Health",
      image: "/assets/Image.png",
    },
  ];
  const [showModal, setShowModal] = useState(false);
  const [shopData, setShopData] = useState([])
  useEffect(() => {
    axios
      .get("https://api.dev.lellall.com/shops")
      .then((res) => setShopData(res?.data?.data));
    axios
      .get("https://api.dev.lellall.com/products?page=0&size=10")
      .then((res) => console.log(res));
  }, []);

  const sliderRef = useRef();

  const slideLeft = () => {
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft - 500;
  };
  const slideRight = () => {
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft + 500;
  };

  const isMobile = useResponsiveValue({
    sm: true,
    md: false,
  });

  console.log({shopData})

  return (
    <>
      <Banner />
      <MainContainer>
        <div className="category-container">
          <Heading>What do you want to buy?</Heading>
          <CategoryButton onClick={() => setShowModal(true)}>
            Choose a Category
          </CategoryButton>
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
              {shopData?.map((shop) => (
                <Grid item xs={4} sm={4} md={4} lg={3} key={shop.id}>
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
            {customers?.map((customer, i) => (
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
            {shopData.map((shop) => (
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
          <p className="link-text">View all</p>
        </div>
        <div className="slider-container">
          <div className="icons" onClick={slideLeft}>
            <BiSolidLeftArrow className="icon" />
          </div>
          {isMobile ? (
            <div className="slider">
              {data.slice(0, 4).map((shop) => (
                <MiniShopCard shop={shop} key={shop.id} />
              ))}
            </div>
          ) : (
            <div className="slider" ref={sliderRef}>
              {data.map((shop) => (
                <MiniShopCard shop={shop} key={shop.id} />
              ))}
            </div>
          )}

          <div className="icons" onClick={slideRight}>
            <BiSolidRightArrow className="icon" />
          </div>
        </div>
      </RecommendationsContainer>
      <Modal isOpen={showModal} closeFunc={setShowModal} title="Categories">
        <Grid container rowSpacing={{ xs: 3, sm: 3, md: 4 }} spacing={2}>
          {categories.map((category) => (
            <Grid item xs={3} sm={3} md={3} lg={3} key={category.id}>
              <CategoryCard src={category.image} name={category.name} />
            </Grid>
          ))}
        </Grid>
      </Modal>
    </>
  );
};

export default Main;
