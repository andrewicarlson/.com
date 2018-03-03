import React, { Component } from 'react';
import Bio from '../../bio';
import ExternalResources from '../../externalResources';
import './about.scss';

class About extends Component {
    render() {
        return(
            <div className="aic-view">
                <Bio />
                <ExternalResources />
            </div>
        );
    }
}

export default About;