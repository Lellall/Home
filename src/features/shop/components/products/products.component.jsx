/* eslint-disable react/prop-types */
import Grid from "@mui/material/Grid";
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

export default function Products({ products }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState("Top Sellers");

  const categories = [
    "Top Sellers",
    "Drinks",
    "Best Treats",
    "Packaging",
    "Reviews",
  ];


  // const currentProductsData = useMemo(() => {
  //   const firstPageIndex = (currentPage - 1) * PageSize;
  //   const lastPageIndex = firstPageIndex + PageSize;
  //   return products?.slice(firstPageIndex, lastPageIndex) || [];
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [currentPage]);

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
          {products?.map((product) => (
            <Grid item xs={12} sm={4} md={4} lg={3} key={product.id}>
              <SingleProduct product={product} />
            </Grid>
          ))}
        </Grid>
      </StyledProducts>

      <Pagination
        currentPage={currentPage}
        totalCount={products?.length || 0}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </MainContainer>
  );
}
