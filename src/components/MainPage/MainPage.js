import React from 'react'
import style from './MainPage.module.css'
import '../../App.css';
import dog from '../../img/main-dog.png'

export default function MainPage() {
    return (<div className="container">

            <div className={style.mainSide}>

                <div className={style.leftSide}>
                    <h1 className={style.phrase}>Як у людей, так і у тварин одне бажання — бути коханими!  </h1>
                    <button className={style.btn}>Приєднатися</button>
                </div>

                <div>
                    <img src={dog} className={style.dogImg}/>
                </div>

            </div>


        </div>

    )
}