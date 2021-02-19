import React from 'react'
import {NavLink} from "react-router-dom";
import style from "../../Header/Header.module.css";

export default function LoginHeader(){
    return(<div>
        <NavLink to='/login' >Увійти</NavLink>
        <NavLink to='/login/registration' >Реєстрація</NavLink>
    </div>)
}