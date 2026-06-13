import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLenis } from "../../hooks/useLenis";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Preloader } from "./Preloader";
import { LightModeLayout } from "./LightModeLayout";
import { useTheme } from "../../contexts/ThemeContext";

export function Layout() {
  useLenis();
  const { pathname } = useLocation();
  const { useLightUI } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Render sophisticated light mode UI when theme is light
  console.log("Layout render - useLightUI:", useLightUI, "pathname:", pathname);
  if (useLightUI && pathname === "/") {
    console.log("Rendering LightModeLayout");
    return <LightModeLayout />;
  }
  console.log("Rendering regular dark mode layout");

  // Render original dark mode React UI
  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0 grid-bg" aria-hidden />
      <Preloader />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
