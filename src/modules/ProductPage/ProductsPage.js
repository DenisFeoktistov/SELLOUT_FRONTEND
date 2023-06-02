import React, { useEffect, useState } from "react";
import BigPicture from "@/components/BigPicture/BigPicture";
import { Col, Container, Row } from "react-bootstrap";
import BreadcrumbC from "@/components/BreadcrumbC/BreadcrumbC";
import FiltersBlock from "@/components/FiltersBlock/FiltersBlock";
import SortDropdown from "@/components/SortDropdown/SortDropdown";
import FilterDropdowns from "@/components/FilterDropdowns/FilterDropdowns";
import s from "./ProductPage.module.css";
import PageSwitch from "@/components/PageSwitch/PageSwitch";
import BuyoutModal from "@/components/BuyoutModal/BuyoutModal";
import Recommendations from "@/components/Recommendations/Recommendations";
import Viewed from "@/components/Viewed/Viewed";
import ProductList from "@/components/ProductList/ProductList";

const ProductsPage = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    const width = window.innerWidth;
    if (width <= 1000) {
      setIsDesktop(false);
    }
  }, [isDesktop]);
  const handleClick = () => {
    if (isDesktop) {
      setIsOpen(!isOpen);
    } else {
      setModalOpen(!modalOpen);
    }
  };
  return (
    <Container style={{ marginTop: "150px" }}>
      <BigPicture />
      <BreadcrumbC />
      {isDesktop && (
        <Row className="d-flex justify-content-lg-between align-items-center">
          <Col lg={10} className="d-flex">
            <button
              className={s.border + " fw-bold"}
              onClick={() => setIsOpen(!isOpen)}
            >
              Фильтры
            </button>
            <FiltersBlock />
          </Col>
          <Col lg={2} className="mt-lg-0 mt-2 d-flex justify-content-lg-end">
            <SortDropdown />
          </Col>
        </Row>
      )}
      {!isDesktop && (
        <div className="d-flex justify-content-center align-items-center">
          <button className={s.border + " fw-bold"} onClick={handleClick}>
            Фильтры
          </button>
          <SortDropdown />
        </div>
      )}
      <div className="d-flex mt-5">
        {isOpen && <FilterDropdowns />}
        <ProductList />
      </div>
      <PageSwitch />
      <BuyoutModal />
      <Recommendations />
      <Viewed />

      {modalOpen && (
        <div className={s.modal}>
          <Container>
            <div className="d-flex justify-content-between">
              <div className={s.modal_header}>
                <div className="d-flex align-items-center">
                  <div className={s.modal_text}>Фильтры</div>
                  <div className={s.number}>3</div>
                </div>
                <button className={s.modal_btn}>Сбросить все</button>
              </div>
              <svg
                onClick={handleClick}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill=""
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
                style={{ cursor: "pointer" }}
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </div>
            <FiltersBlock />
            <FilterDropdowns />
            <div className="d-flex justify-content-center">
              <button className={s.results} onClick={handleClick}>
                Показать результаты
              </button>
            </div>
          </Container>
        </div>
      )}
    </Container>
  );
};

export default ProductsPage;
