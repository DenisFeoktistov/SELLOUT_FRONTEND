import React from 'react'

function ProductPage(props) {
  let statusOpened = "";

  if (props.card.name !== "") {
    statusOpened = "popup_opened";
  } else {
    statusOpened = "";
  }

  const closePopups = props.onClose;

//   const closePopupWithOverlay = (evt) => {
//     if (evt.target === evt.currentTarget) {
//       closePopups();
//     }
//   };
  return (
    // <div className={`popup image-popup ${statusOpened}`} onClick={closePopupWithOverlay}>
    // 	<div className="popup__container">
    // 		<img className="image-popup__image" alt={props.card.name} src={props.card.link} />
    // 		<button className="popup__close-button" onClick={closePopups}></button>
    // 		<h3 className="image-popup__title">{props.card.name}</h3>
    // 	</div>
    // </div>
    <section className="product">
      <div>
        <img
          className="product__image"
          alt={props.card.name}
          src={props.card.link}
        />
        <p className="product__tag">Tag</p>
        <p className="product__brand">Brand</p>
        <p className="product__title">Title</p>
        <p className="product__price">Price</p>
        <select className="product__config" name="size">
          <option value="Выбрать конфигурацию" selected disabled>Выбрать конфигурацию</option>
          <option value="10US">10US</option>
		  <option value="11US">11US</option>
        </select>
        <button className="product__fastDeliver">Быстрая до 10 дней</button>
        <button className="product__slowDeliver">Медленная до 30 дней</button>
        <button className="product__addButton">Добавить в корзину</button>
        <button className="product__likeButton">Избранное</button>
      </div>

      <div className="product__path">
        <p className="product__point">Men's</p>
        <p className="product__point">Nike</p>
        <p className="product__point">Shoes</p>
        <p className="product__point">Smth</p>
      </div>
      <p className="product__brand">Brand</p>
      <p className="priduct__title">Title</p>
      <p className="priduct__description">Title</p>
      <div className="product__id">
        <h2 className="id__title">Product IDs</h2>
        <p className="id__sellout">983092834</p>
        <p className="id__brandStyle">0338234</p>
      </div>
    </section>
  );
}

export default ProductPage;
