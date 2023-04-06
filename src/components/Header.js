import React from 'react'
import logo from '../images/header_logo.svg';
function Header() {
  return (
    <header className="header">
    <div className="top">
        <div className="menu">
            <p className="menu__element">О нас</p>
            <p className="menu__element">Блог</p>
        </div>
        <h1 className="title">SELLOUT</h1>
        <div className="personal">
            <p>Личный кабинет</p>
            <img src="../images/favourites_unfilled.svg" alt="Heart Image"/>
            <p>Корзина</p>
        </div>
    </div>
    <div className="top">
        <div className="menu">
            <p className="menu__element">Новинки</p>
            <p className="menu__element">Рекомендации</p>
            <p className="menu__element">Бренды</p>
            <p className="menu__element">Обувь</p>
            <p className="menu__element">Одежда</p>
            <p className="menu__element">Аксессуары</p>
            <p className="menu__element">Мгновенная доставка</p>
            <p className="menu__element">Скидки</p>
        </div>
        <form className="header__form">
            <input type="text" name="text" className="search" placeholder="Поиск"/>
            <input type="submit" name="submit" className="submit" value="Search"/>
          </form>

    </div>
    
</header>);
}

export default Header;