import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NoMatch from '../../noMatch';
import studies from './studies.json';
import './caseStudy.scss';

class CaseStudy extends Component {
    render() {
        const currentStudy = studies.reduce((acc, curr) => {
            if(curr.key === this.props.match.params.study) {
                acc = curr;
            }

            return acc;
        }, {});

        if(currentStudy.key) {
            return (
                <div>
                    <Link to="/portfolio">Back</Link>
                    {currentStudy.logo}
                </div>
            )
        } else {
            return (
                <NoMatch />
            )
        }
    }
}

export default CaseStudy;