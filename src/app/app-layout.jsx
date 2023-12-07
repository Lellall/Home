import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../features/ui";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
