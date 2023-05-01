import React from "react";
import cart from "@/assets/images/cart.svg";
import fav_outline from "@/assets/images/favourites_unfilled.svg";
import account from "@/assets/images/account.svg";
import logo from "@/assets/images/sellout_logo.svg";
import search from "@/assets/images/search.svg";
import express_shipping from "@/assets/images/express_shipping.svg";
import menu_3stripes from "@/assets/images/menu_3stripes.svg";

import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__aside}></div>
      <div className={styles.header__top}>
        <button type="button" className={styles.top__mobileMenuButton}></button>
        <div className={styles["top__top-menu"]}>
          <Link href="#" className={styles["top-menu__element"]}>
            О нас
          </Link>
          <Link href="#" className={styles["top-menu__element"]}>
            Блог
          </Link>
          <Link href="#" className={styles["top-menu__element"]}>
            Связаться с нами
          </Link>
        </div>
        <Image className={styles.top__image__logo} src={logo} alt="SELLOUT" />
        <div className={styles.top__personal}>
          <a href="#">
            <Image
              className={styles.personal__image}
              src={account}
              alt="Личный кабинет"
            />
          </a>
          <a href="#">
            <Image
              className={styles.personal__image}
              src={fav_outline}
              alt="Избранное"
            />
          </a>
          <a>
            <Image
              className={`${styles.personal__image} ${styles.personal__image__cart}`}
              src={cart}
              alt="Корзина"
            />
          </a>
        </div>
      </div>
      <div className={styles.header__bottom}>
        <div className={styles["bottom__bottom-menu"]}>
          <p className={styles["bottom-menu__element"]}>Новинки</p>
          <p className={styles["bottom-menu__element"]}>Рекомендации</p>
          <p className={styles["bottom-menu__element"]}>Бренды</p>
          <p className={styles["bottom-menu__element"]}>Обувь</p>
          <p className={styles["bottom-menu__element"]}>Одежда</p>
          <p className={styles["bottom-menu__element"]}>Аксессуары</p>
          <div
            className={`${styles["bottom-menu__element"]} ${styles["bottom-menu__shipping"]}`}
          >
            <p className={styles["bottom-menu__shipping__p"]}>
              Мгновенная доставка
            </p>
            <Image
              className={styles["bottom-menu__shipping_image"]}
              src={express_shipping}
              alt="Мгновенная доставка"
            />
          </div>
          <p className={`${styles["bottom-menu__element"]} ${styles.discount}`}>
            Скидки
          </p>
        </div>
        <form className={styles.bottom__form}>
          <input
            type="search"
            name="text"
            className={styles.form__search}
            placeholder="Поиск"
          />
          <Image
            className={styles.form__submit__image}
            src={search}
            alt="Кнопка поиска"
          />
        </form>
      </div>
      <div className={styles.header__popup}>Что-то написано</div>
    </header>
  );
}

export default Header;
