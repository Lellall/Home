import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <p>hey there</p>
      <Outlet />
    </div>
  );
};

export default AppLayout;
