import { useEffect, useState } from 'react';
import {useParams } from "react-router-dom"
import { Products, ShopBanner } from "./components";
import axios from "axios";

const Main = () => {
  const { shopId } = useParams();

  const [shopData, setShopData] = useState([])
  useEffect(() => {
    axios
      .get(`http://api.dev.lellall.com/shops/${shopId}`)
      .then((res) => setShopData(res.data));
  }, []);

  return (
    <>
      <ShopBanner shop={shopData} />
      <Products products={shopData?.products}/>
    </>
  );
};

export default Main;
