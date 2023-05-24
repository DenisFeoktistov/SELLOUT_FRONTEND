import React from "react";
import s from "./ProductCard.module.css";
import shoe from "@/assets/img/shoe.png";
import like from "@/assets/icons/heart.svg";
import truck from "@/assets/icons/truck.svg";
import re from "@/assets/icons/arrow-return-left.svg";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className={s.card}>
      <div className={s.icons_block}>
        <div style={{ display: "flex" }}>
          <div className={s.sale}>-20%</div>
          <Image src={truck} alt="shippment" className={s.truck} />
          <Image src={re} alt="shippment" className={s.truck} />
        </div>
        <Image src={like} alt="like" className={s.like} />
      </div>
      <Image className={s.img} src={shoe} alt="shoe" />
      <div className={s.text_block}>
        <div className={s.tag}>Tag</div>
        <div className={s.brand}>Brand</div>
        <div className={s.name}>Name</div>
        <div className={s.price}>300$</div>
      </div>
    </div>
  );
};

export default ProductCard;
