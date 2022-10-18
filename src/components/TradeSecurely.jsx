import React from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

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
                                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_18008_75)">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M30.3275 78.8015C51.7368 84.1462 73.459 71.1131 78.8034 49.6731C84.1481 28.2328 71.0834 6.51152 49.674 1.1984C28.2334 -4.14629 6.54277 8.88683 1.19839 30.3268C-4.14629 51.7359 8.88683 73.4571 30.3275 78.8015ZM50.2322 24.9221C55.7947 26.8283 59.826 29.7033 59.0447 35.0158C58.4822 38.8908 56.326 40.7971 53.4197 41.4533C57.3572 43.5158 59.3572 46.6721 57.451 52.1096C55.1072 58.8908 49.4822 59.4533 41.9822 58.0471L40.1697 65.3283L35.7947 64.2346L37.576 57.0471C36.451 56.7658 35.2635 56.4533 34.076 56.1408L32.2635 63.3596L27.8885 62.2658L29.701 54.9846C29.1099 54.8233 28.5188 54.6724 27.9219 54.52C27.4773 54.4065 27.0295 54.2921 26.576 54.1721L20.8572 52.7346L23.0447 47.7033C23.0447 47.7033 26.2635 48.5471 26.2322 48.4846C27.451 48.7971 28.0135 47.9846 28.2322 47.4533L31.1072 35.9533C31.2635 36.0158 31.4197 36.047 31.5759 36.0783C31.4112 35.9959 31.2706 35.9618 31.1541 35.9335C31.138 35.9296 31.1224 35.9258 31.1072 35.9221L33.1697 27.7033C33.2322 26.7658 32.9197 25.5783 31.1385 25.1408C31.201 25.1096 27.951 24.3596 27.951 24.3596L29.1072 19.6721L35.1697 21.1721V21.2033C36.076 21.4221 37.0135 21.6408 37.9822 21.8596L39.7635 14.6721L44.1385 15.7658L42.3885 22.8283C43.576 23.0783 44.7635 23.3596 45.9197 23.6408L47.6697 16.6096L52.0447 17.7033L50.2322 24.9221ZM36.3125 51.0381C39.8641 51.9846 47.7743 54.0928 49.0135 49.0783C50.3028 43.9772 42.7434 42.2698 39.029 41.4308C38.602 41.3344 38.2258 41.2494 37.9197 41.1721L35.5135 50.8283C35.7444 50.8866 36.013 50.9582 36.3125 51.0381ZM39.7458 36.9205C42.7155 37.7227 49.2405 39.4854 50.3885 34.9221C51.5373 30.2989 45.2498 28.8914 42.1579 28.1993C41.8015 28.1195 41.4875 28.0492 41.2322 27.9846L39.0447 36.7346C39.2462 36.7856 39.482 36.8493 39.7458 36.9205Z" fill="#F9AA4B"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_18008_75">
                                                <rect width="80" height="80" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <h3 className="currencies__name">Bitcoin<span className="currencies__name_margin">BTC</span></h3>
                                <p className="currencies__desc">Digital currency in which a record of transactions is maintained.</p>
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
                                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_18008_80)">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80ZM39.8855 51.9358L25.1555 43.243L39.881 64.0015L54.623 43.243L39.8855 51.9358ZM25.3805 40.4455L40.109 16L54.8435 40.4545L40.109 49.156L25.3805 40.4455Z" fill="#1181E8"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_18008_80">
                                                <rect width="80" height="80" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
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
                                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_18008_84)">
                                            <path d="M40 0C32.0888 0 24.3552 2.34596 17.7772 6.74121C11.1992 11.1365 6.07234 17.3836 3.04484 24.6927C0.0173316 32.0017 -0.774802 40.0444 0.768607 47.8036C2.31202 55.5628 6.12165 62.6902 11.7157 68.2843C17.3098 73.8784 24.4372 77.688 32.1964 79.2314C39.9556 80.7748 47.9983 79.9827 55.3074 76.9552C62.6164 73.9277 68.8635 68.8008 73.2588 62.2228C77.6541 55.6448 80 47.9112 80 40C80 29.3913 75.7857 19.2172 68.2843 11.7157C60.7828 4.21427 50.6087 0 40 0ZM39.1267 12.26H47.74C47.9162 12.2602 48.09 12.3012 48.2477 12.3796C48.4055 12.4581 48.543 12.5719 48.6495 12.7123C48.756 12.8527 48.8286 13.0158 48.8616 13.1888C48.8947 13.3619 48.8873 13.5403 48.84 13.71L42.0733 36.77L48.4234 34.83L47.0634 39.4467L40.65 41.3133L36.49 55.36H58.7433C58.9197 55.361 59.0935 55.4027 59.251 55.482C59.4086 55.5613 59.5457 55.6759 59.6515 55.817C59.7574 55.958 59.8292 56.1217 59.8613 56.2951C59.8935 56.4685 59.885 56.647 59.8367 56.8167L57.8967 63.4833C57.8038 63.8005 57.6107 64.079 57.3463 64.2773C57.082 64.4756 56.7605 64.583 56.43 64.5833H22.4433L28.1867 45.1767L21.8334 47.11L23.2333 42.5733L29.6 40.64L37.6734 13.3733C37.7619 13.0545 37.952 12.7733 38.2149 12.5723C38.4778 12.3714 38.7991 12.2617 39.13 12.26H39.1267Z" fill="#59C19C"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_18008_84">
                                                <rect width="80" height="80" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
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