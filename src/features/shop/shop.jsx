import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Products, ShopBanner } from "./components";
import axios from "axios";
import { BaseUrl } from "../../utils/config";

const Main = () => {
  // const { shopId } = useParams();
  const { id: shopId } = useParams();
  // console.log(id,'shopId');
  const [shopData, setShopData] = useState([]);
  useEffect(() => {
    axios
      .get( `${BaseUrl}/shops/${shopId}`)
      .then((res) => setShopData(res.data));
  }, [shopId]);
  return (
    <>
      <ShopBanner shop={shopData} />
      <Products products={shopData?.products} />
    </>
  );
};

export default Main;
