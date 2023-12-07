// import { Shops } from "./shop.styles";
import { Products, ShopBanner } from "./components";

const Main = () => {
  const newShop = { name: "Domino’s Pizza", status: "Open" };
  return (
    <>
      <ShopBanner shop={newShop} />
      <Products/>
    </>
  );
};

export default Main;
