import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../features/ui";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer show={true}/>
    </>
  );
};

export default AppLayout;
