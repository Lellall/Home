/* eslint-disable react/jsx-key */
// CategoriesList.js
import axios from "axios";
import { ArrowRight2, CloseCircle } from "iconsax-react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useProductStore from "./productStore";
import { useNavigate } from "react-router-dom";
import { BaseUrl } from "../utils/config";
import useGlobalModalStore from "./useGlobalModal";
import { useGetCategoriesQuery } from "../features/newshop/categories-api";

const CategoriesList = ({ isSelectCategory, setIsSelectCategory }) => {
  const [categoriesData, setCategoriesData] = useState([]);
  const navigate = useNavigate();
  // const [isCategory, setIsCategory] = useState(false);
  // const fetchCategories = useProductStore((state) => state.fetchCategories);
  // const categories = useProductStore((state) => state.categories);
  const { setIsCategoryModalOpen } = useGlobalModalStore();
  // const { data: categories } = useGetCategoriesQuery(0, {
  // refetchOnMountOrArgChange: true,
  // });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BaseUrl}/categories/all-categories`);
        setCategoriesData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const searchProducts = useProductStore((state) => state.searchProductsByCategory);

  const handleCategorySearch = (category) => {
    navigate(`?cat=${category?.name}`);
    searchProducts(category.id);
    setIsSelectCategory(true);
  };
  const handleCategoryCloseSearch = () => {
    navigate("/");
    searchProducts("");
    setIsSelectCategory(false);
  };

  return (
    <Container>
      {categoriesData?.data?.slice(0, 8).map((category) => (
        <div
          key={category.id}
          onClick={() => handleCategorySearch(category)}
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <Category key={category?.id}>{category?.name} </Category>
          <div>
            <ArrowRight2 style={{ marginTop: "12px" }} size="16" />
          </div>
        </div>
      ))}

      <p
        style={{
          fontSize: "small",
          color: isSelectCategory ? "red" : "",
          cursor: "pointer",
          marginLeft: "30px",
          // borderBottom: isCategory ? '1px solid #F06D05' : '',
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px  0px",
          // background: 'red',
        }}
        onClick={() => {
          isSelectCategory ? handleCategoryCloseSearch() : setIsCategoryModalOpen(true);
        }}
      >
        {isSelectCategory ? "Close" : "View more"}
        {isSelectCategory && <CloseCircle style={{ marginLeft: "10px" }} size="16" color="red" />}
      </p>
    </Container>
  );
};

export default CategoriesList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  // border-right: 0.2px solid #ccc;
  min-height: 400px;
  border-width: 80%;
`;

const Category = styled.div`
  width: 98%;
  // border-bottom: 1px solid #ddd;
  border-width: 20%;
  padding: 10px 0;
  // text-align: center;
  font-size: 16px;
  line-height: 24px;
  margin: 2px;
  // border-radius: 5px;
  margin-left: 30px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
  svg {
    margin-top: 10px;
  }
`;
