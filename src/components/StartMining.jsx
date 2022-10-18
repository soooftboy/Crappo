import React from 'react';

export const StartMining = () => {
    return (
        <section className="start-mining">
            <div className="container">
                <div className="start-mining__inner">
                    <div className="start-mining__text">
                        <h2 className="start-mining__title">Start mining now</h2>
                        <p className="start-mining__desc">Join now with CRAPPO to get the latest news and start mining now</p>
                    </div>
                    <form action="#" method="post" className="start-mining__form">
                        <input type="email" name="your-email" id="your-email" className="start-mining__email" placeholder="Enter your email" />
                        <button type="button" className="start-mining__button">Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
    )
}