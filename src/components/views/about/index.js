import React, { Component } from 'react';
import PageTitle from '../../pageTitle';
import './about.scss';

class About extends Component {
    render() {
        return(
            <div className="aic-view">
                <section className="aic-content aic-pull-forward">
                    <PageTitle text="About Me"/>
                </section>
            </div>
        );
    }
}

export default About;