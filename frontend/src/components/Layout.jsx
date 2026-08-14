import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { getLayoutBgClass } from "../utils/shellTheme";
import { useTheme } from "../context/ThemeContext";

const Layout = () => {
  const { pathname } = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${getLayoutBgClass(pathname, theme)}`}
    >
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
