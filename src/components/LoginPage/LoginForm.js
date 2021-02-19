import React from 'react'
import {Field, reduxForm} from "redux-form";
import style from "./LoginForm.module.css"
import "../../App.css"


function LoginForm(props) {
    return (<div className="container">
            elsa@gmail.com
            s3cr3t

            <div className={style.form}>
                <form onSubmit={props.handleSubmit}>
                    <Field type="text" placeholder="Login" name={"email"} component={"input"}/>
                    <Field type="password" placeholder="Password" name={"password"} component={"input"}/>
                    <button>Login</button>
                </form>
            </div>
    </div>
        )
}


export const LoginReduxForm = reduxForm({
    form: 'loginForm'
})(LoginForm);