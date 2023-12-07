// import Grid from '@mui/system/Unstable_Grid';
import Grid from "@mui/material/Grid";
// import Grid from '@mui/material/Unstable_Grid2';
import {
  MainContainer,
  StyledProducts,
  CategoryContainer,
  Category,
} from "./products.styles";
import SingleProduct from "../product/product.component";

import { useState, useMemo } from "react";

import { Pagination } from "../../../ui";

let PageSize = 8;

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState("Top Sellers");
  const categories = [
    "Top Sellers",
    "Drinks",
    "Best Treats",
    "Packaging",
    "Reviews",
  ];

  const data = [
    {
      id: 1,
      name: "Pizza Delight",
      category: "Health",
      price: "2,400",
      description: "Timex Mens Easy Reader Day-Date Expansion Band Watch",
      image: "assets/Image.png",
    },
    {
      id: 2,
      name: "Dominos Pizza",
      category: "Health",
      price: "2,400",
      description: "Timex Mens Easy Reader Day-Date Expansion Band Watch",
      image: "assets/Image.png",
    },
    {
      id: 3,
      name: "Creams Delight",
      category: "Health",
      price: "2,400",
      description: "Timex Mens Easy Reader Day-Date Expansion Band Watch",
      image: "assets/Image.png",
    },
    {
      id: 4,
      name: "Pizza Hut",
      category: "Health",
      price: "2,400",
      description: "Timex Mens Easy Reader Day-Date Expansion Band Watch",
      image: "assets/Image.png",
    },
    {
      id: 5,
      name: "Pizza Hut",
      category: "Health",
      price: "2,400",
      description: "Timex Mens Easy Reader Day-Date Expansion Band Watch",
      image: "assets/Image.png",
    },
    {
      id: 6,
      name: "Pizza Hut",
      category: "Health",
      price: "2,400",
      description: "Timex Mens Easy Reader Day-Date Expansion Band Watch",
      image: "assets/Image.png",
    },
    {
      id: 7,
      name: "Pizza Hut",
      category: "Health",
      price: "2,400",
      description: "Timex Mens Easy Reader Day-Date Expansion Band Watch",
      image: "assets/Image.png",
    },
    {
      id: 8,
      name: "Pizza Hut",
      category: "Health",
      price: "2,400",
      description: "Timex Mens Easy Reader Day-Date Expansion Band Watch",
      image: "assets/Image.png",
    },
    {
      id: 9,
      name: "Pizza Hut",
      category: "Health",
      price: "2,400",
      description: "Timex Mens Easy Reader Day-Date Expansion Band Watch",
      image: "assets/Image.png",
    },
    {
      id: 10,
      name: "Pizza Hut",
      category: "Health",
      price: "2,400",
      description: "Timex Mens Easy Reader Day-Date Expansion Band Watch",
      image: "assets/Image.png",
    },
    {
      id: 11,
      name: "Pizza Hut",
      category: "Health",
      price: "2,400",
      description: "Timex Mens Easy Reader Day-Date Expansion Band Watch",
      image: "assets/Image.png",
    },
    {
      id: 12,
      name: "Pizza Hut",
      category: "Health",
      price: "2,400",
      description: "Timex Mens Easy Reader Day-Date Expansion Band Watch",
      image: "assets/Image.png",
    },
    {
      id: 13,
      name: "Pizza Hut",
      category: "Health",
      price: "2,400",
      description: "Timex Mens Easy Reader Day-Date Expansion Band Watch",
      image: "assets/Image.png",
    },
    {
      id: 14,
      name: "Pizza Hut",
      category: "Health",
      price: "2,400",
      description: "Timex Mens Easy Reader Day-Date Expansion Band Watch",
      image: "assets/Image.png",
    },
    {
      id: 15,
      name: "Pizza Hut",
      category: "Health",
      price: "2,400",
      description: "Timex Mens Easy Reader Day-Date Expansion Band Watch",
      image: "assets/Image.png",
    },
    {
      id: 16,
      name: "Pizza Hut",
      category: "Health",
      price: "2,400",
      description: "Timex Mens Easy Reader Day-Date Expansion Band Watch",
      image: "assets/Image.png",
    },
    {
      id: 17,
      name: "Pizza Hut",
      category: "Health",
      price: "2,400",
      description: "Timex Mens Easy Reader Day-Date Expansion Band Watch",
      image: "assets/Image.png",
    },
    {
      id: 18,
      name: "Pizza Hut",
      category: "Health",
      price: "2,400",
      description: "Timex Mens Easy Reader Day-Date Expansion Band Watch",
      image: "assets/Image.png",
    },
    {
      id: 19,
      name: "Pizza Hut",
      category: "Health",
      price: "2,400",
      description: "Timex Mens Easy Reader Day-Date Expansion Band Watch",
      image: "assets/Image.png",
    },
    {
      id: 20,
      name: "Pizza Hut",
      category: "Health",
      price: "2,400",
      description: "Timex Mens Easy Reader Day-Date Expansion Band Watch",
      image: "assets/Image.png",
    },
  ];

  const currentProductsData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <MainContainer>
      <CategoryContainer>
        <p className="heading">{currentCategory}</p>
        <div className="categories">
          {categories.map((category, i) => (
            <Category
              key={i}
              onClick={() => setCurrentCategory(category)}
              isActive={currentCategory === category}
            >
              {category}
            </Category>
          ))}
        </div>
      </CategoryContainer>
      <StyledProducts>
        <Grid
          container
          rowSpacing={{ xs: 2, sm: 5, md: 5 }}
          spacing={4}
        >
          {currentProductsData.map((product) => (
            <Grid item xs={12} sm={4} md={4} lg={3} key={product.id}>
              <SingleProduct product={product} />
            </Grid>
          ))}
        </Grid>
      </StyledProducts>

      <Pagination
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </MainContainer>
  );
}
