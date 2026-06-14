import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLenis } from "../../hooks/useLenis";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Preloader } from "./Preloader";

export function Layout() {
  useLenis();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0 grid-bg" aria-hidden />
      <Preloader />
      <Navbar />
      <div className="min-w-0 overflow-x-hidden">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
