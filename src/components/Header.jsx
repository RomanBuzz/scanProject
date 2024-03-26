import * as React from "react";

import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
    let [isAuthorized, setAuthorized] = React.useState(false);
    let [isLoaded, setLoaded] = React.useState(false);

    return (
        <header id="home" className="header__content">

            <div className="column column--left">
                <div className="header__logo">
                    <Link to="/" >
                        <img
                            src={require('./../images/a21cf0e37634bf7f262554f86388e0d5.png')}
                            alt="header logo"
                        />
                    </Link>
                </div>
                <div className="column column--center">
                    <div className="header__buttons">
                        <Link to="/">Главная</Link>
                        <Link to="/" className="button--right">Тарифы</Link>
                        <Link to="auth" className="button--right">FAQ</Link>
                    </div>
                </div>
            </div>
            {isAuthorized ?
                (
                    <>
                        <div className="column column--authorized">
                            <div className="name-block">
                                <div>Алексей А.</div>
                                <Link to="/" onMouseDown={() => setAuthorized(false)}>Выйти</Link>
                            </div>
                            <div className="image-block">
                                <img
                                    src={require('./../images/Avatar.png')}
                                    alt="user avatar"
                                />
                            </div>
                        </div>
                        <div className="column column--loading" onClick={() => isLoaded ? (setLoaded(false)) : (setLoaded(true))}>
                            {isLoaded ?
                                (
                                    <div className="company--line">
                                        <div className="name--column">
                                            <div className="first--element">Использовано компаний</div>
                                            <div className="second--element">Лимит по компаниям</div>
                                        </div>
                                        <div className="value--column">
                                            <div className="first--element">34</div>
                                            <div className="second--element">100</div>
                                        </div>
                                    </div>
                                ) :
                                (
                                    <img
                                        src={require('./../images/loading.svg')}
                                        alt="loading image"
                                    />
                                )}
                        </div>
                    </>
                ) :
                (
                    <div className="column column--right">
                        <div className="header__buttons">
                            <Link to="/" >Зарегистрироваться</Link>
                            <img
                                src={require('./../images/Rectangle 7.svg')}
                                alt="registration separator"
                                className="button--right"
                            />
                            <button onClick={() => setAuthorized(true)} className="button--right">Войти</button>
                        </div>
                    </div>
                )}
        </header>
    );
}

export default Header;