import React, { Component } from 'react';
import HexBackground from '../../hexBackground';
import './home.scss';

class Home extends Component {
    render() {
        return(
            <div className="aic-view">
                <HexBackground />
                <section className="aic-content">
                    <h1 className="aic-pull-forward aic-home-headline aic-typography--title">I build <em>websites</em> for people and <em>people</em> for teams.</h1>
                </section>
            </div>
        );
    }
}

export default Home;