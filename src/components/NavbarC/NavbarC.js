import React from 'react';
import {Container} from "react-bootstrap";
import s from './NavbarC.module.css'
import like from '../../static/icons/heart.svg'
import person from '../../static/icons/person-circle.svg'
import cart from '../../static/icons/bag.svg'
import truck from '../../static/icons/truck.svg'
import SearchInput from "../../UI/SearchInput/SearchInput";
import Megamenu from "../../UI/Megamenu/Megamenu";

const NavbarC = () => {
    return (
        <header className={s.header}>
            <Container>
                <div className={s.row1}>
                    <div className={s.block}>
                        <p href="" className={s.links}>О нас</p>
                        <p href="" className={s.links}>Блог</p>
                        <p href="" className={s.links}>Связаться с нами</p>
                    </div>
                    <div className={s.block}>
                        <h1 className={s.logo}>SELLOUT</h1>
                    </div>
                    <div className={s.block}>
                        <img src={like} alt="" className={s.icons}/>
                        <img src={person} alt="" className={s.icons}/>
                        <div>Денис</div>
                        <img src={cart} alt="" className={s.icons}/>
                    </div>
                </div>
                <div className={s.row1}>
                    <div className={s.block}>
                        <p href="" className={s.links}>Новинки</p>
                        <p href="" className={s.links}>Рекомендации</p>
                        <Megamenu className={s.links}>Бренды</Megamenu>
                        <Megamenu className={s.links}>Обувь</Megamenu>
                        <Megamenu className={s.links}>Одежда</Megamenu>
                        <Megamenu className={s.links}>Аксессуары</Megamenu>
                        <p href="" className={s.links}>
                            Мгновенная доставка
                            <img src={truck} alt="" className={s.truck}/>
                        </p>
                        <p href="" className={s.links} style={{color: '#b61212'}}>Скидки</p>
                    </div>
                    <div>
                        <SearchInput/>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default NavbarC;