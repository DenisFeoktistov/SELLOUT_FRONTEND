import React from "react";
import s from "./Recommendations.module.css";
import { ProductCard } from "../ProductCard";
import { ScrollableBlock2 } from "@/shared/ui";

const Recommendations = () => {
  return (
    <>
      <hr />
      <p className={s.title}>Рекомендации</p>
      <ScrollableBlock2>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ScrollableBlock2>
      <hr />
    </>
  );
};

export default Recommendations;
