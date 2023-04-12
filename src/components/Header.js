import React from 'react'
import favourites_unfilled from '../images/favourites_unfilled.svg';
import cart from '../images/cart.svg';
import account from '../images/account.svg';
import logo from '../images/sellout_logo.svg';
import search from '../images/search.svg';
import express_shipping from '../images/express_shipping.svg';
import menu_3stripes from '../images/menu_3stripes.svg'

function Header() {
    const [menuClassName, setMenuClassName] = React.useState("");
    function openMenu (){
        if (menuClassName===""){
            setMenuClassName("menu_visible")
        } else {
            setMenuClassName("")
        }
    }
    function openSearch (){

    }
  return (
    <header className="header">
    <div className="header__top">
        <button type="button" className="top__mobileMenuButton" onClick={openMenu}></button>
        <button type="button" className="top__mobileSearchButton" onClick={openSearch}></button>
        <div className={`top__top-menu ${menuClassName}`}>
            <p className="top-menu__element">О нас</p>
            <p className="top-menu__element">Блог</p>
            <p className="top-menu__element">Связаться с нами</p>
        </div>
        <img className="top__image__logo" src={logo} alt="SELLOUT"/>
        <div className="top__personal">
            <img className="personal__image" src={account} alt="Личный кабинет"/>
            <img className="personal__image" src={favourites_unfilled} alt="Избранное"/>
            <img className="personal__image personal__image__cart" src={cart} alt="Корзина"/>
        </div>
    </div>
    <div className="header__bottom">
        <div className="bottom__bottom-menu">
            <p className="bottom-menu__element">Новинки</p>
            <p className="bottom-menu__element">Рекомендации</p>
            <p className="bottom-menu__element">Бренды</p>
            <p className="bottom-menu__element">Обувь</p>
            <p className="bottom-menu__element">Одежда</p>
            <p className="bottom-menu__element">Аксессуары</p>
            <div className="bottom-menu__element bottom-menu__shipping">
                <p className="bottom-menu__shipping__p">Мгновенная доставка</p>
                <img className="bottom-menu__shipping_image" src={express_shipping} alt="Мгновенная доставка"/>
            </div>
            <p className="bottom-menu__element" style={{color: "red"}}>Скидки</p>
        </div>
        <form className="bottom__form">
            <input type="text" name="text" className="form__search" placeholder="Поиск"/>
            <input type="image" name="submit" className="form__submit__image" src={search} alt="Кнопка поиска"/>
        </form>
    </div>
    
</header>);
}

export default Header;