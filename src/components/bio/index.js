import React, { Component } from 'react';
import PageTitle from '../pageTitle';
import Me from './me.jpg';

class Bio extends Component {
    render() {
        return(
            <section className="aic-content aic-pull-forward">
                <PageTitle text="About Me"/>
                <img src={Me} alt="Andrew Carlson" />
                <p>Andrew Carlson is an experienced Technical Architect who partners with companies who want to stay hungry and founders who want to scale their technical practice.</p>
                <p>Andrew believes that the most important player in any digital experience is the end user, and the way to deliver them with the greatest impact is to build the experience with them in mind every step of the way.</p>
                <p>Working with companies like Ford, Honeywell, and Phillips 66 has given Andrew strong enterprise experience and doing so from the Agency side has kept him on the cutting edge of technology and modern practices. He is involved in the local development community, leads an Apprenticeship program, organizes a Client-Side Center of Excellence at VML, and has actively mentored over the course of his career.</p>
            </section>
        );
    }
}

export default Bio;