import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div className="">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default MainLayout;
