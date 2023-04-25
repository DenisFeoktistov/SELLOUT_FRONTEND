import React from "react";
import api from "../utils/api.js";
import Card from "./Card";
import { cartActions } from "@/shared/store";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Cart(props) {
  const currentUser = React.useContext(CurrentUserContext);

  //console.log(currentUser)

  const [statusVisible, changeStatus] = React.useState("");

  const profileAvatarHover = () => {
    changeStatus("profile__avatar-overlay_visible");
  };
  const profileAvatarHoverNot = () => {
    changeStatus("");
  };

  return (
    <section className="basket">
      {/* <section classNameNameName="profile">
                <div classNameNameName="profile__avatar-container" onClick={props.onEditAvatar} onMouseOver={profileAvatarHover} onMouseOut={profileAvatarHoverNot}>
                    <img classNameNameName="profile__avatar" src={currentUser.avatar} alt="Аватар" />
                    <div classNameNameName={`profile__avatar-overlay ${statusVisible}`}></div>
                </div>

                <div classNameNameName="profile__info">
                    <h1 classNameNameName="profile__name" id="profile__name">{currentUser.name}</h1>
                    <button classNameNameName="profile__edit-button-box" type="button" onClick={props.onEditProfile}></button>
                    <p classNameNameName="profile__status" id="profile__status">{currentUser.about}</p>
                </div>
                <button classNameNameName="profile__add-button-box" type="button" onClick={props.onAddPlace}></button>
            </section> */}

      <h2 className="basket__title>">Корзина</h2>
      <div className="basket__list">
        <div className="basket__card">
          <p className="basketCard__tag">Tag</p>
          <p className="basketCard__brand">Brand</p>
          <p className="basketCard__title">Title</p>
          <p className="basketCard__price">Price</p>
          <p className="basketCard__deliver">Доставка</p>
          <p className="basketCard__price">Price</p>
          <p className="basketCard__deliver">Доставка</p>
          <p className="basketCard__size">Размер</p>
          <p className="basketCard__amount">Количество</p>
          <button className="product__likeButton">Избранное</button>
          <button className="product__deleteButton">Удалить</button>
        </div>
      </div>
      <div className="basket__result">
        <h2 className="result__title">Итого:</h2>
        <p className="result__products">Товаров на сумму:</p>
        <p className="result__deliver">Доставка:</p>
        <p className="result__sum">Сумма:</p>
        <button className="result__buyButton">Оформить заказ</button>
      </div>
    </section>
  );
}

export default Cart;
