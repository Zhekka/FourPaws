import React from 'react'
import "../../../App.css"
import style from "./Service.module.css"
import first from "../../../img/first-pet.png"
import second from "../../../img/second-pet.png"
import third from "../../../img/third-ped.png"

export default function Service() {
    return (<div className="container">

        <h1 className={style.header}>Послуги для тварин</h1>


        <div className={style.servicePlace}>

            <div className={style.servicePlace__item}>
                <img className={style.servicePlace__item__img} src={first}/>
                <h3>Здоров'я</h3>

            </div>

            <div className={style.servicePlace__item}>
                <img className={style.servicePlace__item__img} src={second}/>
                <h3>Дозвілля</h3>

            </div>

            <div className={style.servicePlace__item}>
                <img className={style.servicePlace__item__img} src={third}/>
                <h3>Харчування</h3>

            </div>

        </div>

    </div>)
}