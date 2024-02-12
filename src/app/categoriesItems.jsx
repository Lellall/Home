// CategoriesList.js
import axios from "axios";
import { ArrowRight2 } from "iconsax-react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useProductStore from "./productStore";
import { useNavigate } from "react-router-dom";

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

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.dev.lellall.com/categories/all-categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const searchProducts = useProductStore((state) => state.searchProductsByCategory);

  const handleCategorySearch = (category) => {
    console.log(category,'lll');
    navigate(`?cat=${category?.name}`)
    searchProducts(category.id)
  }

  return (
    <Container>
      {categories.slice(0, 8).map((category, index) => (
        <div onClick={() => handleCategorySearch(category)} style={{display:"flex", justifyContent:"space-around"}}>
          <Category key={category?.id}>{category?.name} </Category>
          <div>
            <ArrowRight2 style={{ marginTop: "12px" }} size="16" />
          </div>
        </div>
      ))}
      <p
        style={{
          fontSize: "10px",
          color: "",
          cursor: "pointer",
          marginLeft: "30px",
        }}
      >
        View more
      </p>
    </Container>
  );
};

export default CategoriesList;
