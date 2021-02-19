import React from 'react'
import {LoginReduxForm} from "./LoginForm";
import axios from "axios";
import LoginHeader from "./LoginHeader/LoginHeader";
import "../../App.css"
import Registration from "./Registration/Registration";

export default function LoginPage() {


    let onSubmit = (formData) => {
        // console.log(formData);
        axios.post('http://25.49.250.186:8080/login', {...formData})
            .then((data) => {
                console.log("POST status",data)
            })
    }

    return (<div className="container">

        <LoginHeader/>
        <LoginReduxForm onSubmit={onSubmit}/>
        <Registration/>
    </div>)
}