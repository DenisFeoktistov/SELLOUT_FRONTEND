import React from 'react'
import express_shipping from '../images/express_shipping.svg'
import product_return from '../images/product_return.svg'


import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {

    const currentUser = React.useContext(CurrentUserContext);
    //console.log(props)
    const isOwn = props.cardsToAdd.owner._id === currentUser._id;

    // Создаём переменную, которую после зададим в `classNameName` для кнопки удаления
    const cardDeleteButtonclassNameName = (
        `element__delete-button ${isOwn ? 'element__delete-button_visible' : ''}`
    );

    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = props.cardsToAdd.likes.some(i => i._id === currentUser._id);

    // Создаём переменную, которую после зададим в `classNameName` для кнопки лайка
    const cardLikeButtonclassNameName = `element__like-button ${isLiked ? 'element__like-button_active' : ''}`;

    
    function handleClick() {
        props.onCardClick(props.cardsToAdd);
    }
    //this.handleClick = this.handleClick.bind(this);

    
    function handleDeleteClick (card){
        //console.log('delete')
        props.onCardDelete(card)
    }
    //this.handleDeleteClick = this.handleDeleteClick.bind(this);

    
    function handleLikeClick (card){
        //console.log('card')
        props.onCardLike(card)
    }
    //this.handleLikeClick = this.handleLikeClick.bind(this);
    return (
        <div className="card">
            <div className="card__extras">
                <p className="card__extras__off">-20%</p>
                <img className="card__extras__return" src={product_return} alt="Доступен возврат"/>
                <img className="card__extras__shipping" src={express_shipping} alt="Мгновенная доставка"/>
            </div>
            <button className="card__like" onClick={handleLikeClick}></button>
            <img className="card__image" alt="Изображение товара" src={props.cardsToAdd.link}/>
            <div className="card__info">
                <p className="card__tag">Tag</p>
                <p className="card__brand">Brand</p>
                <p className="card__title">Title</p>
                <p className="card__price">Price</p>
            </div>
        </div>
    );

}

export default Card;