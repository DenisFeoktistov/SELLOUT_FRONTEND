import React from 'react'
import {useState, useEffect} from 'react';
import styles from "./ProductPage.module.css";

function ProductPage(props) {
  let statusOpened = "";
  console.log(props)

  return (
    <section class="product">
      <div class="product__wrap">
        <div class="image__wrap">
          <button class="image__slide image__slide_previous"></button>
          <img
            class="product__image"
            alt="Name"
            src="https://images.unsplash.com/photo-1621348283934-1970ce077ff7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
          />
          <button class="image__slide image__slide_next"></button>
        </div>
        <div class="product__info">
          <p class="product__tag">Tag</p>
          <p class="product__brand">Brand</p>
          <p class="product__title">Title</p>
          <p class="product__price">Price<img class="card__extras__return" src="src\assets\images/product_return.svg" alt="Доступен возврат"/>
            <img class="card__extras__shipping" src="src\assets\images/express_shipping.svg" alt="Мгновенная доставка"/></p>
          <a class="product__sizes">Размерная сетка</a>
          <div class="product__options">
            <select class="product__config" name="size">
              <option class="config__option" value="Выбрать конфигурацию" selected disabled>
                Выбрать конфигурацию
              </option>
              <option class="config__option" value="10US">10US</option>
              <option class="config__option" value="11US">11US</option>
            </select>
            <button class="product__fastDeliver button">
              Быстрая до 10 дней
            </button>
            <button class="product__slowDeliver button">
              Медленная до 30 дней
            </button>
            <button class="product__addButton button">
              Добавить в корзину
            </button>
            <button class="product__likeButton button">Избранное</button>
          </div>
        </div>
      </div>

      <div class="product__bottom">
        <div class="product__path">
          <a class="product__point">Men's</a>
          <img class="path__arrow" src="./images/arrRight.png" />
          <a class="product__point">Nike</a>
          <img class="path__arrow" src="./images/arrRight.png" />
          <a class="product__point">Shoes</a>
          <img class="path__arrow" src="./images/arrRight.png" />
          <a class="product__point">Smth</a>
        </div>
        <p class="product__brand">Brand</p>
        <p class="product__title">Title</p>
        <p class="product__description">
          Описание продукта Описание продукта Описание продукта Описание
          продукта Описание продукта Описание продукта
        </p>
        
      </div>
      <div class="product__id">
        <h2 class="id__title">Product IDs</h2>
        <p class="id__sellout">983092834</p>
        <p class="id__brandStyle">0338234</p>
      </div>
    </section>
  );
}

export default ProductPage;