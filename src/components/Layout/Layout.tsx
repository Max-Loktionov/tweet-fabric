import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AppBar from "../AppBar";

const Layout = () => {
  return (
    <>
      <AppBar />
      <ToastContainer />
      <Outlet />
    </>
  );
};
export default Layout;
