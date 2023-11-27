import { Products, Stores } from "./shop.styles";
import { ShopCard, ProductCard, ShopBanner } from "./components";

const Main = () => {
  const newShop = { name: "Domino’s Pizza", status: "Open" };
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
  ];

  const shop = {
    name: "Domino’s Pizza",
    status: "Open",
    category: "Health",
    rating: 4,
  };
  return (
    <div>
      <ShopBanner shop={newShop} />
      <Products>
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Products>
      <Stores>
        <ShopCard shop={shop} />
        <ShopCard shop={shop} />
        <ShopCard shop={shop} />
        <ShopCard shop={shop} />
        <ShopCard shop={shop} />
        <ShopCard shop={shop} />
      </Stores>
    </div>
  );
};

export default Main;
