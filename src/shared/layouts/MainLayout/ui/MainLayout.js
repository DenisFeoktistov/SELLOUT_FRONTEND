import { Footer } from "@/modules/Footer";
import { Header } from "@/modules/Header";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
