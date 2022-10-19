import React from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Bitcoin, Ethereum, Litecoin } from '../img/currencies/Currencies';
import { ArrowRight } from '../img/icons/Icons';

export const TradeSecurely = () => {
    return (
        <section className="about-currency">
            <div className="container">
                <div className="about-currency__inner">
                    <div className="currency-counting">
                        <h2 className="currency-counting__title trade-title">Check how much you can earn</h2>
                        <p className="currency-counting__sub-title trade-sub-title">Let’s check your hash rate to see how much you will earn today, Exercitation veniam consequat sunt nostrud amet.</p>
                        <div className="currency-counting__calculator currency-calculator">
                            <form action="#" method="post" className="currency-calculator__form">
                                <input type="text" name="hash-rate" id="hash-rate" placeholder="Enter your hash rate" className="currency-calculator__hash-rate"/>
                                <button type="button" className="currency-calculator__select">TH/s <IoMdArrowDropdown className="currency-calculator__arrow" /></button>
                                <div className="currency-calculator__options">
                                    <button type="button" className="currency-calculator__option">TH/v</button>
                                    <button type="button" className="currency-calculator__option">TH/x</button>
                                </div>
                                <button type="button" className="currency-calculator__calculate">Calculate</button>
                            </form>
                            <div className="currency-calculator__answer">
                                <p className="currency-calculator__info">ESTIMATED 24 HOUR REVENUE:</p>
                                <p className="currency-calculator__income">0.055 130 59 ETH <span className="currency-calculator__income_blue">($1275)</span></p>
                                <p className="currency-calculator__note">Revenue will change based on mining difficulty and Ethereum price.</p>
                            </div>
                        </div>
                    </div>
                    <div className="trade-securely">
                        <h2 className="trade-securely__title trade-title">Trade securely and market the high growth cryptocurrencies.</h2>
                        <div className="trade-securely__currencies currencies">
                            <div className="currencies__item">
                                <div className="currencies__icon">
                                    <Bitcoin />
                                </div>
                                <h3 className="currencies__name">Bitcoin<span className="currencies__name_margin">BTC</span></h3>
                                <p className="currencies__desc">Digital currency in which a record of transactions is maintained.</p>
                                <button className="currencies__button">
                                    <span className="currencies__button_text">Start mining</span>
                                    <span className="currencies__button_arrow">
                                        <ArrowRight />
                                    </span>
                                </button>
                            </div>
                            <div className="currencies__item">
                                <div className="currencies__icon">
                                    <Ethereum />
                                </div>
                                <h3 className="currencies__name">Ethereum<span className="currencies__name_margin">ETH</span></h3>
                                <p className="currencies__desc">Blockchain technology to create and run decentralized digital applications.</p>
                                <button className="currencies__button">
                                    <span className="currencies__button_text">Start mining</span>
                                    <span className="currencies__button_arrow">
                                        <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.0144 20C1.75082 20.0015 1.48953 19.9511 1.24552 19.8517C1.0015 19.7524 0.779561 19.606 0.592421 19.4209C0.404703 19.2352 0.255707 19.0144 0.154029 18.7711C0.0523498 18.5277 0 18.2667 0 18.0031C0 17.7395 0.0523498 17.4785 0.154029 17.2352C0.255707 16.9919 0.404703 16.771 0.592421 16.5854L7.22164 10.0158L0.852783 3.40621C0.479762 3.03208 0.270388 2.52597 0.270388 1.99844C0.270388 1.4709 0.479762 0.964796 0.852783 0.590662C1.03897 0.403502 1.26048 0.254948 1.50454 0.15357C1.74859 0.0521935 2.01037 0 2.27476 0C2.53915 0 2.80093 0.0521935 3.04499 0.15357C3.28904 0.254948 3.51055 0.403502 3.69674 0.590662L11.4275 8.57803C11.7945 8.9513 12 9.45314 12 9.97582C12 10.4985 11.7945 11.0003 11.4275 11.3736L3.41635 19.361C3.23658 19.5545 3.02013 19.7107 2.7795 19.8203C2.53887 19.93 2.27883 19.9911 2.0144 20V20Z" fill="#3671E9"/>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                            <div className="currencies__item">
                                <div className="currencies__icon">
                                    <Litecoin />
                                </div>
                                <h3 className="currencies__name">Litecoin<span className="currencies__name_margin">LTC</span></h3>
                                <p className="currencies__desc">Cryptocurrency that enables instant payments to anyone in the world.</p>
                                <button className="currencies__button">
                                    <span className="currencies__button_text">Start mining</span>
                                    <span className="currencies__button_arrow">
                                        <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.0144 20C1.75082 20.0015 1.48953 19.9511 1.24552 19.8517C1.0015 19.7524 0.779561 19.606 0.592421 19.4209C0.404703 19.2352 0.255707 19.0144 0.154029 18.7711C0.0523498 18.5277 0 18.2667 0 18.0031C0 17.7395 0.0523498 17.4785 0.154029 17.2352C0.255707 16.9919 0.404703 16.771 0.592421 16.5854L7.22164 10.0158L0.852783 3.40621C0.479762 3.03208 0.270388 2.52597 0.270388 1.99844C0.270388 1.4709 0.479762 0.964796 0.852783 0.590662C1.03897 0.403502 1.26048 0.254948 1.50454 0.15357C1.74859 0.0521935 2.01037 0 2.27476 0C2.53915 0 2.80093 0.0521935 3.04499 0.15357C3.28904 0.254948 3.51055 0.403502 3.69674 0.590662L11.4275 8.57803C11.7945 8.9513 12 9.45314 12 9.97582C12 10.4985 11.7945 11.0003 11.4275 11.3736L3.41635 19.361C3.23658 19.5545 3.02013 19.7107 2.7795 19.8203C2.53887 19.93 2.27883 19.9911 2.0144 20V20Z" fill="#3671E9"/>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}