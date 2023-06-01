import { BigPicture } from "@/components/BigPicture";
import { BreadcrumbC } from "@/components/BreadcrumbC";
import FilterDropdowns from "@/components/FilterDropdowns/FilterDropdowns";
import { FiltersBlock } from "@/components/FiltersBlock";
import { ProductList } from "@/components/ProductList";
import { SortDropdown } from "@/components/SortDropdown";
import { getProducts } from "@/shared/api/products";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ProductsPage = ({ products }) => {
  return (
    <Container>
      <BigPicture />
      <BreadcrumbC />
      <Row className="d-flex justify-content-between align-items-center">
        <Col lg={6}>
          <FiltersBlock />
        </Col>
        <Col lg={6} className="mt-lg-0 mt-2 d-flex justify-content-lg-end">
          <SortDropdown />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col lg={3}>
          <FilterDropdowns />
        </Col>
        <Col lg={9}>
          <ProductList products={products} />
        </Col>
      </Row>
    </Container>
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

export default ProductsPage;
