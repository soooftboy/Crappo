import React from 'react';
import './style/style.scss';
import { Header } from './components/Header';
import { Postheader } from './components/Postheader';
import { Advantages } from './components/Advantages';
import { TradeSecurely } from './components/TradeSecurely';
import { StartMining } from './components/StartMining';
import { Footer } from './components/Footer'

const App = () => {
    return (
        <div className="App">
            <Header />
            <main>
                <Postheader />
                <Advantages />
                <TradeSecurely />
                <StartMining />
            </main>
            <Footer />
        </div>
    );
}

export default App;
