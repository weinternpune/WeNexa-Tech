import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#020617] text-white antialiased scroll-smooth overflow-x-hidden">
      <Navbar />

      <main>{children}</main>
     <Footer/>
    </div>
  );
};

export default Layout;
