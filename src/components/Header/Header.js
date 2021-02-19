import React from 'react'
import style from './Header.module.css'
import logo from '../../img/logo.png'
import '../../App.css';
import {NavLink} from "react-router-dom";

export default function Header() {
    return (<div className="container">
            <div className={style.nav}>
                <NavLink to="/main"><img className={style.logo} src={logo} alt="Four paws"/></NavLink>
                <ul className={style.menu}>
                    <li>
                        <NavLink to='/main' activeClassName={style.activeLink}>Головна</NavLink>
                    </li>
                    <li>
                        <NavLink to='/service' activeClassName={style.activeLink}>Сервіс</NavLink>
                    </li>
                    <li>
                        <NavLink to='/forum' activeClassName={style.activeLink}>Форум</NavLink>
                    </li>
                    <li>
                        <NavLink to='/advertisement' activeClassName={style.activeLink}>Оголошення</NavLink>
                    </li>
                    <li>
                        <NavLink to='/directory' activeClassName={style.activeLink}>Довідник</NavLink>
                    </li>
                    <li>
                        <NavLink to='/login' activeClassName={style.activeLink}>Увійти</NavLink>
                    </li>

                </ul>
            </div>
        </div>

    )
}