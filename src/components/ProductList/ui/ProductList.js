import React from "react";
import { Col, Row } from "react-bootstrap";
import { AdminCard } from "@/components/AdminCard";
import { ProductCard } from "@/components/ProductCard";

const ProductList = () => {
  return (
    <Row>
      <Col lg={4}>
        <AdminCard />
      </Col>
      <Col lg={4}>
        <ProductCard />
      </Col>
      <Col lg={4}>
        <ProductCard />
      </Col>
      <Col lg={4}>
        <ProductCard />
      </Col>
      <Col lg={4}>
        <ProductCard />
      </Col>
      <Col lg={4}>
        <ProductCard />
      </Col>
      <Col lg={4}>
        <ProductCard />
      </Col>
    </Row>
  );
};

export default ProductList;
