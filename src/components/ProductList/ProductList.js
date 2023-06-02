import React from "react";
import AdminCard from "../AdminCard/AdminCard";
import s from "./ProductList.module.css";
import { ProductCard } from "../ProductCard";

const ProductList = () => {
  return (
    <div className={s.product_list}>
      <AdminCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductList;
