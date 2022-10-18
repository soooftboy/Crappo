import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaVk } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <span className="footer__copyright">©2021 CRAPPO. All rights reserved</span>
                    <ul className="footer__social social">
                        <li className="social__item"><a href="#" className="social__link"><FaFacebookF className="social__icon" /></a></li>
                        <li className="social__item"><a href="#" className="social__link"><FaInstagram className="social__icon" /></a></li>
                        <li className="social__item"><a href="#" className="social__link"><FaYoutube className="social__icon" /></a></li>
                        <li className="social__item"><a href="#" className="social__link"><FaTwitter className="social__icon" /></a></li>
                        <li className="social__item"><a href="#" className="social__link"><FaVk className="social__icon" /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}