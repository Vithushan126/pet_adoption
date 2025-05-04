import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../src/components/header";
import Footer from "../src/components/footer";

const MainLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <main className="flex-1 ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
