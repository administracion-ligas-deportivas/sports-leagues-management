import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/assets/css/layout.css";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
