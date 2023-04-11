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
    <div className="top">
        <button type="button" className="header__button" onClick={openMenu}></button>
        <button type="button" className="header__searchButton" onClick={openSearch}></button>
        <div className={`menu ${menuClassName}`}>
            <p className="menu__element">О нас</p>
            <p className="menu__element">Блог</p>
            <p className="menu__element">Связаться с нами</p>
        </div>
        <img className="header__image__logo" src={logo} alt="SELLOUT"/>
        <div className="personal">
            <img className="header__image" src={account} alt="Личный кабинет"/>
            <img className="header__image" src={favourites_unfilled} alt="Избранное"/>
            <img className="header__image header__image__cart" src={cart} alt="Корзина"/>
        </div>
    </div>
    <div className="bottom">
        <div className="menu">
            <p className="menu__element">Новинки</p>
            <p className="menu__element">Рекомендации</p>
            <p className="menu__element">Бренды</p>
            <p className="menu__element">Обувь</p>
            <p className="menu__element">Одежда</p>
            <p className="menu__element">Аксессуары</p>
            <div className="menu__element menu_shipping">
                <p className="menu_shipping__p">Мгновенная доставка</p>
                <img className="header__image_shipping" src={express_shipping} alt="Мгновенная доставка"/>
            </div>
            <p className="menu__element" style={{color: "red"}}>Скидки</p>
        </div>
        <form className="header__form">
            <input type="text" name="text" className="search" placeholder="Поиск"/>
            <input type="image" name="submit" className="submit" src={search} alt="Кнопка поиска"/>
        </form>
    </div>
    
</header>);
}

export default Header;