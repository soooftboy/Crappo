import React from 'react';
import { IoBarChart, IoEarth } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';


export const Advantages = () => {
    return (
        <section className="advantages">
            <div className="container">
                <div className="advantages__inner">
                    <div className="advantages__item item-advantages currency">
                        <div className="item-advantages__image">
                            <IoBarChart className="item-advantages__icon" />
                        </div>
                        <div className="item-advantages__text">
                            <h2 className="item-advantages__title">$30B</h2>
                            <p className="item-advantages__desc">Digital Currency Exchanged</p>
                        </div>
                    </div>
                    <div className="advantages__item item-advantages trust">
                        <div className="item-advantages__image">
                            <FaUser className="item-advantages__icon" />
                        </div>
                        <div className="item-advantages__text">
                            <h2 className="item-advantages__title">10M+</h2>
                            <p className="item-advantages__desc">Trusted Wallets Investor</p>
                        </div>
                    </div>
                    <div className="advantages__item item-advantages countries">
                        <div className="item-advantages__image">
                            <IoEarth className="item-advantages__icon" />
                        </div>
                        <div className="item-advantages__text">
                            <h2 className="item-advantages__title">195</h2>
                            <p className="item-advantages__desc">Countries Supported</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}