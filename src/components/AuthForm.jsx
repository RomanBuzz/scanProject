import * as React from "react";

import "../styles/AuthForm.css";

function AuthForm() {
    let serviceName = "Для оформления подписки\n\на тариф, необходимо\n\авторизоваться.";

    React.useEffect(() => {

    }, []);

    return (
        <div className="auth__page">
            <div className="column column--left">
                <div className="service_name group_name" style={
                    {
                        whiteSpace: 'pre-line',
                    }
                }>
                    {serviceName}
                </div>
                <img src={require('./../images/auth_characters.svg')} alt="auth logo" />
            </div>
            <div className="column column--right">
                <img className="lock_img" src={require('./../images/auth_lock.svg')} alt="authform logo" />
                <div className="form_auth_block">
                    <div className="form_auth_block_content">
                        <p className="form_auth_block_head_text">Авторизация</p>
                        <form className="form_auth_style" action="#" method="post">
                            <label>Логин или номер телефона:</label>
                            <input type="text" name="auth_name" placeholder="Введите Ваш имейл" required />
                            <label>Пароль:</label>
                            <input type="password" name="auth_pass" placeholder="Введите пароль" required />
                            <button className="form_auth_button" type="submit" name="form_auth_submit">Войти</button>
                        </form>
                        <div className="social_media_auth">
                            <img src={require('./../images/auth_google.svg')} alt="google auth" />
                            <img src={require('./../images/auth_facebook.svg')} alt="facebook auth" />
                            <img src={require('./../images/auth_yandex.svg')} alt="yandex auth" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default AuthForm;