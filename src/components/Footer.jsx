import * as React from "react";

import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {

    return (
        <footer className="footer__content">
            <div className="column column--left">
                <div className="footer__logo">
                    <Link to="/" >
                        <img
                            src={require('./../images/6465f70937726c512fe72d7d2f4a4889.png')}
                            alt="footer logo"
                        />
                    </Link>
                </div>

            </div>
            <div className="column column--right">
                <div className="footer__contacts">
                    <div>г. Москва, Цветной б-р, 40</div>
                    <div>+7 495 771 21 11</div>
                    <div>info@skan.ru</div>
                </div>
                <div className="footer__copyright">
                    <div>Copyright. 2024</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;