import React from "react";
import { useState, useEffect } from "react";
import styles from "./ProductPage.module.css";

function ProductPage(props) {
  let statusOpened = "";
  console.log(props);

  return (
    <section className="product">
      <div className="product__wrap">
        <div className="image__wrap">
          <button className="image__slide image__slide_previous"></button>
          <img
            className="product__image"
            alt="Name"
            src="https://images.unsplash.com/photo-1621348283934-1970ce077ff7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
          />
          <button className="image__slide image__slide_next"></button>
        </div>
        <div className="product__info">
          <p className="product__tag">Tag</p>
          <p className="product__brand">Brand</p>
          <p className="product__title">Title</p>
          <p className="product__price">
            Price
            <img
              className="card__extras__return"
              src="@assets/images/product_return.svg"
              alt="Доступен возврат"
            />
            <img
              className="card__extras__shipping"
              src="@assets/images/express_shipping.svg"
              alt="Мгновенная доставка"
            />
          </p>
          <a className="product__sizes">Размерная сетка</a>
          <div className="product__options">
            <select className="product__config" name="size">
              <option
                className="config__option"
                value="Выбрать конфигурацию"
                selected
                disabled
              >
                Выбрать конфигурацию
              </option>
              <option className="config__option" value="10US">
                10US
              </option>
              <option className="config__option" value="11US">
                11US
              </option>
            </select>
            <button className="product__fastDeliver button">
              Быстрая до 10 дней
            </button>
            <button className="product__slowDeliver button">
              Медленная до 30 дней
            </button>
            <button className="product__addButton button">
              Добавить в корзину
            </button>
            <button className="product__likeButton button">Избранное</button>
          </div>
        </div>
      </div>

      <div className="product__bottom">
        <div className="product__path">
          <a className="product__point">Men's</a>
          <img className="path__arrow" src="@assets/images/arrRight.png" />
          <a className="product__point">Nike</a>
          <img className="path__arrow" src="@assets/images/arrRight.png" />
          <a className="product__point">Shoes</a>
          <img className="path__arrow" src="@assets/images/arrRight.png" />
          <a className="product__point">Smth</a>
        </div>
        <p className="product__brand">Brand</p>
        <p className="product__title">Title</p>
        <p className="product__description">
          Описание продукта Описание продукта Описание продукта Описание
          продукта Описание продукта Описание продукта
        </p>
      </div>
      <div className="product__id">
        <h2 className="id__title">Product IDs</h2>
        <p className="id__sellout">983092834</p>
        <p className="id__brandStyle">0338234</p>
      </div>
    </section>
  );
}

export default ProductPage;
