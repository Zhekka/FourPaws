import React from 'react'
import style from './UserQuestion.module.css'

export default function UserQuestions() {
    return (<div>


        <h2 className={style.header}>Мої запитання на форумі</h2>
        <div className={style.forum}>
            <div className={style.forumBlock}>

                <div className={style.forumBlock__item}>
                    <h4>Name</h4>
                    <h4>Date</h4>
                </div>

                <div className={style.forumBlock__item}>
                    <p>Питання з форуму</p>
                </div>

                <div className={style.forumBlock__item}>
                    <button className={style.btnShowMore}> ></button>
                </div>
            </div>

            <div className={style.forumBlock}>
                <div className={style.forumBlock__item}>
                    <h4>Name</h4>
                    <h4>Date</h4>
                </div>

                <div className={style.forumBlock__item}>
                    <p>Питання з форуму</p>
                </div>

                <div className={style.forumBlock__item}>
                    <button className={style.btnShowMore}> ></button>
                </div>
            </div>
            <div className={style.forumBlock}>
                <div className={style.forumBlock__item}>
                    <h4>Name</h4>
                    <h4>Date</h4>
                </div>

                <div className={style.forumBlock__item}>
                    <p>Питання з форуму</p>
                </div>

                <div className={style.forumBlock__item}>
                    <button className={style.btnShowMore}> ></button>
                </div>
            </div>

            <button className={style.btn__loadMore}>Загрузити ще</button>
            <br/>

        </div>

    </div>)
}