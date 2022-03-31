import React from 'react';
import {PATH} from "./Pages";
import {NavLink} from 'react-router-dom';
import s from './../../p1-main/m1-ui/u1-app/App.module.css';

function Header() {
    return (
        <div className={s.nav__main__wrapper}>
            <nav className={s.nav__wrapper}>
                <ul className={s.nav__bar}>
                    <li><NavLink to={PATH.PRE_JUNIOR}>Pre-Junior</NavLink></li>
                    <li><NavLink to={PATH.JUNIOR}>Junior</NavLink></li>
                    <li><NavLink to={PATH.JUNIOR_PLUS}>Junior-Plus</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
