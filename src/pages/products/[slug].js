import ProductsPage from "@/modules/ProductPage/ProductsPage";
import { getProducts } from "@/modules/ProductsList/api";
import { MainLayout } from "@/shared/layouts/MainLayout";
import React from "react";

const ProductPage = ({ products, productData }) => {
  return (
    <MainLayout>
      <ProductsPage products={products} productData={null} />
    </MainLayout>
  );
};

export const getServerSideProps = async () => {
  const products = await getProducts();

  return {
    props: {
      products,
    },
  };
};

export default ProductPage;
