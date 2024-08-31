import { Outlet } from "react-router-dom";
import NavBar from "../DefaultComponent/NavBar";
import Footer from "../DefaultComponent/Footer";

export default function HomeRoot() {
  return (
    <div className="w-full relative">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
