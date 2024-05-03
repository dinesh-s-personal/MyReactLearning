import React from "react";

export const LoginForm = () => {

    const onSubmit = (event) => {
        event.preventDefault();
    }

    return <div>
        <h1>Login Form</h1>
        <form onSubmit={onSubmit}>
            <input id="username" type="email" placeholder="Enter email"/> <br/>
            <input id="pwd" type="password" placeholder="Enter password"/> <br/>
            <input id="sumbit" type="submit" value={"Login"} />
        </form>
    </div>
}