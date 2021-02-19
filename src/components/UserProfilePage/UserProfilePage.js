import React from 'react'
import '../../App.css';
import UserInfo from "./UserInfo/UserInfo";
import style from "./UserProfilePage.module.css"
import UserQuestions from "./UserQuestions/UserQuestions";


export default function UserProfilePage() {
    return (<div className={style.bg}>
        <div className='container'>
            <UserInfo/>
            <UserQuestions/>


        </div>
    </div>)
}