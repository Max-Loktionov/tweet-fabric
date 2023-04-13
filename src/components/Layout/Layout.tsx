import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AppBar from "../AppBar";

export default function Layout() {
  return (
    <>
      <AppBar />
      <ToastContainer />
      <Outlet />
    </>
  );
}
