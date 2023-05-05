import React from "react";
import { useState, useEffect } from "react";
import styles from "./ProductInfoSection.module.css";
import { ProductInfoGallery } from "@components/ProductInfoGallery";

function ProductInfoSection(props) {
  let statusOpened = "";
  console.log(props);

  return (
    <section className={styles.product}>
      <div className={styles.product__wrap}>
        <ProductInfoGallery />
        <div className={styles.product__info}>
          <p className={styles.product__tag}>Tag</p>
          <p className={styles.product__brand}>Brand</p>
          <p className={styles.product__title}>Title</p>
          <p className={styles.product__price}>
            Price
            <Image
              className={styles.card__extras__return}
              src="@assets/images/product_return.svg"
              alt="Доступен возврат"
            />
            <Image
              className={styles.card__extras__shipping}
              src="@assets/images/express_shipping.svg"
              alt="Мгновенная доставка"
            />
          </p>
          <a className={styles.product__sizes}>Размерная сетка</a>
          <div className={styles.product__options}>
            <select className={styles.product__config} name="size">
              <option
                className={styles.config__option}
                value="Выбрать конфигурацию"
                selected
                disabled
              >
                Выбрать конфигурацию
              </option>
              <option className={styles.config__option} value="10US">
                10US
              </option>
              <option className={styles.config__option} value="11US">
                11US
              </option>
            </select>
            <button
              className={`${styles["product__fastDeliver"]} ${styles["button"]}`}
            >
              Быстрая до 10 дней
            </button>
            <button
              className={`${styles["product__slowDeliver"]} ${styles["button"]}`}
            >
              Медленная до 30 дней
            </button>
            <button
              className={`${styles["product__addButton"]} ${styles["button"]}`}
            >
              Добавить в корзину
            </button>
            <button
              className={`${styles["product__likeButton"]} ${styles["button"]}`}
            >
              Избранное
            </button>
          </div>
        </div>
      </div>
      <div className={styles.product__bottom}>
        <div className={styles.product__path}>
          <a className={styles.product__point}>Men's</a>
          <Image
            className={styles.path__arrow}
            src="@assets/images/arrRight.png"
          />
          <a className={styles.product__point}>Nike</a>
          <Image
            className={styles.path__arrow}
            src="@assets/images/arrRight.png"
          />
          <a className={styles.product__point}>Shoes</a>
          <Image
            className={styles.path__arrow}
            src="@assets/images/arrRight.png"
          />
          <a className={styles.product__point}>Smth</a>
        </div>
        <p className={styles.product__brand}>Brand</p>
        <p className={styles.product__title}>Title</p>
        <p className={styles.product__description}>
          Описание продукта Описание продукта Описание продукта Описание
          продукта Описание продукта Описание продукта
        </p>
      </div>
      <div className={styles.product__id}>
        <h2 className={styles.id__title}>Product IDs</h2>
        <p className={styles.id__sellout}>983092834</p>
        <p className={styles.id__brandStyle}>0338234</p>
      </div>
    </section>
  );
}

export default ProductInfoSection;
