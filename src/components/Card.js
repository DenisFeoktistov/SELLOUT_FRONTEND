import React from 'react'

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
            <p className="card__off">20% off</p>
            <button className="card__like" onClick={handleLikeClick}>Like</button>
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