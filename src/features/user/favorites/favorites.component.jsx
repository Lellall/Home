import { useState, useMemo } from "react";

import Grid from "@mui/material/Grid";
import {
  MainContainer,
  HeadingText,
  EmptyState,
  TabContainer,
  StyledButton,
  ContentContainer,
  Content
} from "./favorites.styles";
import { ProductCard, ShopCard } from "../../shop";
import { Pagination } from "../../ui";

let PageSize = 8;

const Main = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTab, setCurrentTab] = useState(1);

  const products = [
    {
      id: 1,
      price: "2400",
      name: "Pizza",
      imageUrl: "/assets/Image.png",
      description: "Timex Men's Easy Reader Day-Date Expansion Band Watch",
      category: {
        name: "Health",
      },
    },
    {
      id: 2,
      price: "2400",
      name: "Pizza",
      imageUrl: "/assets/Image.png",
      description: "Timex Men's Easy Reader Day-Date Expansion Band Watch",
      category: {
        name: "Health",
      },
    },
    {
      id: 3,
      price: "2400",
      name: "Pizza",
      imageUrl: "/assets/Image.png",
      description: "Timex Men's Easy Reader Day-Date Expansion Band Watch",
      category: {
        name: "Health",
      },
    },
    {
      id: 4,
      price: "2400",
      name: "Pizza",
      imageUrl: "/assets/Image.png",
      description: "Timex Men's Easy Reader Day-Date Expansion Band Watch",
      category: {
        name: "Health",
      },
    },
    {
      id: 5,
      price: "2400",
      name: "Pizza",
      imageUrl: "/assets/Image.png",
      description: "Timex Men's Easy Reader Day-Date Expansion Band Watch",
      category: {
        name: "Health",
      },
    },
    {
      id: 6,
      price: "2400",
      name: "Pizza",
      imageUrl: "/assets/Image.png",
      description: "Timex Men's Easy Reader Day-Date Expansion Band Watch",
      category: {
        name: "Health",
      },
    },
    {
      id: 7,
      price: "2400",
      name: "Pizza",
      imageUrl: "/assets/Image.png",
      description: "Timex Men's Easy Reader Day-Date Expansion Band Watch",
      category: {
        name: "Health",
      },
    },
    {
      id: 8,
      price: "2400",
      name: "Pizza",
      imageUrl: "/assets/Image.png",
      description: "Timex Men's Easy Reader Day-Date Expansion Band Watch",
      category: {
        name: "Health",
      },
    },
    {
      id: 9,
      price: "2400",
      name: "Pizza",
      imageUrl: "/assets/Image.png",
      description: "Timex Men's Easy Reader Day-Date Expansion Band Watch",
      category: {
        name: "Health",
      },
    },
    {
      id: 10,
      price: "2400",
      name: "Pizza",
      imageUrl: "/assets/Image.png",
      description: "Timex Men's Easy Reader Day-Date Expansion Band Watch",
      category: {
        name: "Health",
      },
    },
  ];

  const shops = [
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
    {
      id: 9,
      active: false,
      category: "Groceries",
      name: "Milk",
    },
    {
      id: 10,
      active: false,
      category: "Groceries",
      name: "Milk",
    },
    {
      id: 11,
      active: false,
      category: "Groceries",
      name: "Milk",
    },
    {
      id: 12,
      active: true,
      category: "Groceries",
      name: "Milk",
    },
  ];

  const currentProductsData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return products?.slice(firstPageIndex, lastPageIndex) || [];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const currentShopsData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return shops?.slice(firstPageIndex, lastPageIndex) || [];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const data = true;
  const favData = ["Items", "Shops"];

  return (
    <MainContainer>
      <HeadingText>Favorites</HeadingText>
      <>
        {data ? (
          <ContentContainer>
            <>
              <TabContainer>
                {favData.map((d, i) => (
                  <StyledButton
                    key={i}
                    onClick={() => setCurrentTab(i + 1)}
                    active={currentTab === i + 1}
                  >
                    {d}
                  </StyledButton>
                ))}
              </TabContainer>
              {currentTab === 1 ? (
                <Content>
                  <Grid container spacing={1}>
                    {currentProductsData?.map((product) => (
                      <Grid item xs={12} sm={4} md={4} lg={3} key={product.id}>
                        <ProductCard product={product} />
                      </Grid>
                    ))}
                  </Grid>

                  <Pagination
                    currentPage={currentPage}
                    totalCount={products?.length || 0}
                    pageSize={PageSize}
                    onPageChange={(page) => setCurrentPage(page)}
                  />
                </Content>
              ) : (
                <Content>
                  <Grid container spacing={1}>
                    {currentShopsData?.map((shop) => (
                      <Grid item xs={12} sm={4} md={4} lg={3} key={shop.id}>
                        <ShopCard shop={shop} />
                      </Grid>
                    ))}
                  </Grid>

                  <Pagination
                    currentPage={currentPage}
                    totalCount={shops?.length || 0}
                    pageSize={PageSize}
                    onPageChange={(page) => setCurrentPage(page)}
                  />
                </Content>
              )}
            </>
          </ContentContainer>
        ) : (
          <EmptyState>
            <div className="icon">
              <img src="/assets/user-fav.svg" alt="favorites" />
              <p>You have no favorites...yet</p>
            </div>
          </EmptyState>
        )}
      </>
    </MainContainer>
  );
};

export default Main;
// rowSpacing={{ xs: 2, sm: 5, md: 5 }}
