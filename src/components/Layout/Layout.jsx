import { useEffect, useMemo, useState } from "react";
import { Outlet } from "react-router-dom";

import NavigationBar from "../NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";

const Layout = () => {
  const prefersDark = useMemo(() => {
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
  }, []);

  const storedTheme = useMemo(() => localStorage.getItem("tshop-theme"), []);

  const [theme, setTheme] = useState(
    () => storedTheme ?? (prefersDark ? "dark" : "light")
  );
  const [hasManualTheme, setHasManualTheme] = useState(() =>
    Boolean(storedTheme)
  );

  useEffect(() => {
    if (theme === "dark") {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.removeAttribute("data-theme");
    }
  }, [theme]);

  useEffect(() => {
    if (hasManualTheme) {
      localStorage.setItem("tshop-theme", theme);
    } else {
      localStorage.removeItem("tshop-theme");
    }
  }, [theme, hasManualTheme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!mediaQuery) return;

    const handleChange = (event) => {
      if (!hasManualTheme) {
        setTheme(event.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [hasManualTheme]);

  const toggleTheme = () => {
    setHasManualTheme(true);
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-bg text-text transition-colors">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-accent-soft/60 via-transparent to-transparent" />
      <NavigationBar onToggleTheme={toggleTheme} theme={theme} />
      <main className="mx-auto w-full max-w-7xl px-4 pb-20 pt-12 md:px-10">
        <div className="relative overflow-hidden rounded-[24px] bg-surface/70 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.35)] backdrop-blur-xl">
          <div className="absolute inset-x-6 top-0 h-1 rounded-b-full bg-gradient-to-r from-accent/90 via-accent-soft to-transparent" />
          <div className="relative px-6 pb-10 pt-8 md:px-10">
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
