import { Header } from "@/modules/Header";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default MainLayout;
