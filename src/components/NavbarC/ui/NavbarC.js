import React from 'react';
import {Container, Navbar} from "react-bootstrap";
import style from './NavbarC.module.css'

const NavbarC = () => {
    return (
        <Navbar
            collapseOnSelect
            expand={'lg'}
            className={style.navbar}
        >
            <Navbar.Toggle aria-controls='navbar'/>
            <Container>
                <Navbar.Collapse id='navbar'>
                    asdasdasdasd
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarC;