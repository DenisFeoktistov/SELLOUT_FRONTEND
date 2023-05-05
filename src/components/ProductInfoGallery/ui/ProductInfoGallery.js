import { useState } from "react";
import Image from "next/image";
import styles from "./ProductInfoGallery.module.css";

function ProductInfoGallery() {
  return (
    <div className={styles.image__wrap}>
      <button
        className={`${styles["image__slide"]} ${styles["image__slide_previous"]}`}
      ></button>
      <Image
        className={styles.product__image}
        alt="Name"
        src="https://images.unsplash.com/photo-1621348283934-1970ce077ff7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
      />
      <button
        className={`${styles["image__slide"]} ${styles["image__slide_next"]}`}
      ></button>
    </div>
  );
}

export default ProductInfoGallery;
