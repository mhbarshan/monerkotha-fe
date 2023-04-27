import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavigationBar";

export default function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
