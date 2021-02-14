import React from 'react'
import "../../../App.css"
import style from "./About.module.css"
import playMarket from "../../../img/play-market.png"
import appStore from "../../../img/app-store.png"
import {BrowserRouter} from "react-router-dom";


export default function About() {
    return (

            <div className="container">


                <h1 className={style.header}>Чому Four Paws?</h1>
                <p className={style.aboutInfo}>Тому що ми знаємо, що навіть найкраща технологія настільки ж хороша,
                    як і люди, що стоять за нею.
                    Цілодобовий форум, який працює 24/7</p>

                <h3 className={style.download}>Завантажуй мобільний додаток</h3>

                <div className={style.shopBlock}>
                    <a className={style.shopBlockItem} href="/"><img src={playMarket} alt="Play Market"/></a>
                    <a className={style.shopBlockItem} href="/"><img src={appStore} alt="App Store"/></a>
                </div>

            </div>
    )
}