import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/assets/css/layout.css";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="main-content">{children}</div>
      <Footer />
    </>
  );
}
