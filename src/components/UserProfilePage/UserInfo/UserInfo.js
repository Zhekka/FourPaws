import React, {useEffect, useState} from 'react'
import style from './UserInfo.module.css'
import userAva from '../../../img/userAva.png'
import axios from "axios";


export default function UserInfo() {

    const [state, setState] = useState({
        nickname: '123',
        name: 'test',
        city: 'test',
        phoneNumber: 'test',
        email: 'test'

    });


    useEffect(() => {
        axios.get('http://25.49.250.186:8080/users/1')
            .then(data => {
                setState(data.data)
                console.log(data.data)
            })
    }, [setState])


    return (<div className={style.userInfo}>
        <h2 className={style.header}>Мій профіль</h2>
        <div className={style.infoBlock}>
            <div className={style.infoBlock__item}>
                <img className={style.userAva} src={userAva}/>
                <br/>
                <h4>admin</h4>
            </div>
            <div className={style.infoBlock__item}>
                <h3>{state.nickname}</h3>
                <h3>{state.name}</h3>
                <h3>{state.city}</h3>
            </div>
            <div className={style.infoBlock__item}>
                <h3>{state.email}</h3>
                <h3>{state.phoneNumber}</h3>
                <h3>changepassword</h3>
            </div>
        </div>
    </div>)
}