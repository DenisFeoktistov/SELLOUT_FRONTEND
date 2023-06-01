import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { AdminCard } from "@/components/AdminCard";
import { ProductCard } from "@/components/ProductCard";
import { getProducts } from "@/modules/ProductsList/api";

const ProductList = ({ products }) => {
  const [productsData, setProductsData] = useState();

  return (
    <Row>
      <Col lg={4}>
        <AdminCard />
      </Col>
      {products.results.map((p, i) => (
        <Col lg={4} key={`profuct-${i}`}>
          <ProductCard {...p} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
