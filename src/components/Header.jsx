import React from 'react';
import { Logo } from '../img/Logo'

export const Header = () => {
    return(
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <a className="header__link" href="#">
                        <Logo />
                    </a>
                    <div className="header__menu">
                        <ul className="header__nav nav-header">
                            <li className="nav-header__item">
                                <a href="#" className="nav-header__link">Products</a>
                            </li>
                            <li className="nav-header__item">
                                <a href="#" className="nav-header__link">Features</a>
                            </li>
                            <li className="nav-header__item">
                                <a href="#" className="nav-header__link">About</a>
                            </li>
                            <li className="nav-header__item">
                                <a href="#" className="nav-header__link">Contact</a>
                            </li>
                        </ul>
                        <div className="header__sign-in">
                            <button className="header__login">Login</button>
                            <button className="header__register">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}