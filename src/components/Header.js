import React from 'react'
<<<<<<< HEAD
import logo from '../images/header_logo.svg';
import heart from '../images/favourites_unfilled.svg'
=======
import favourites_unfilled from '../images/favourites_unfilled.svg';
import cart from '../images/cart.svg';
import account from '../images/account.svg';
import logo from '../images/sellout_logo.svg';

>>>>>>> cce6cb50efd643a80079e5a56f29755d9bbf56c6
function Header() {
  return (
    <header className="header">
    <div className="top">
        <div className="menu">
            <p className="menu__element">О нас</p>
            <p className="menu__element">Блог</p>
        </div>
        <img className="header__image__logo" src={logo} alt="SELLOUT"/>
        <div className="personal">
<<<<<<< HEAD
            <p>Личный кабинет</p>
            <img src={heart} alt="Heart Image"/>
            <p>Корзина</p>
=======
            <img className="header__image" src={account} alt="Личный кабинет"/>
            <img className="header__image" src={favourites_unfilled} alt="Избранное"/>
            <img className="header__image header__image__cart" src={cart} alt="Корзина"/>
>>>>>>> cce6cb50efd643a80079e5a56f29755d9bbf56c6
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
            <p className="menu__element">Мгновенная доставка</p>
            <p className="menu__element">Скидки</p>
        </div>
        <form className="header__form">
            <input type="text" name="text" className="search" placeholder="Поиск"/>
            <input type="submit" name="submit" className="submit" value=""/>
        </form>
    </div>
    
</header>);
}

export default Header;