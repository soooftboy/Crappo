import React from 'react';
import Illustration from '../img/post-header/illustration.svg';

export const Postheader = () => {
    return (
        <section className="post-header">
            <div className="container">
                <div className="post-header__inner">
                    <div className="post-header__first">
                        <div className="stock-post-header">
                            <span className="stock-post-header__save">75% SAVE</span>
                            <span className="stock-post-header__text">For the Black Friday weekend</span>
                        </div>
                        <h1 className="post-header__title">Fastest & secure platform to invest in crypto</h1>
                        <p className="post-header__text">Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.</p>
                        <button className="post-header__button">Try for FREE</button>
                    </div>
                    <img src={Illustration} alt="Illustration"/>
                </div>
            </div>
        </section>
    )
}