import React from 'react'
import logo from '../images/header_logo.svg';
function Header() {
  return (
    <header class="header">
    <div class="top">
        <div class="menu">
            <p class="menu__element">Women</p>
            <p class="menu__element">Men</p>
            <p class="menu__element">Kids</p>
            <p class="menu__element">Beauty</p>
        </div>
        <h1 class="title">SELLOUT</h1>
        <div class="personal">
            <p>Личный кабинет</p>
            <p>Избранное</p>
            <p>Корзина</p>
        </div>
    </div>
    <div class="top">
        <div class="menu">
            <p class="menu__element">20% Off</p>
            <p class="menu__element">New in</p>
            <p class="menu__element">Shop By</p>
            <p class="menu__element">Brands</p>
            <p class="menu__element">Clothing</p>
            <p class="menu__element">Shoes</p>
            <p class="menu__element">Trainers</p>
        </div>
        <form class="header__form"> 
            <input type="text" name="text" class="search" placeholder="Search here!"/>
            <input type="submit" name="submit" class="submit" value="Search"/>
          </form>

    </div>
    
</header>);
}

export default Header;