import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NoMatch from '../../noMatch';
import studies from './portfolio-content/studies.json';
import Back from './back.svg';
import External from './external.svg';
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
                <div className="aic-view aic-view--paper">
                    <section className="aic-content aic-pull-forward">
                        <Link to="/portfolio" className="aic-back">
                            <span>
                                <img src={Back} alt="Back to Portfolio" />
                            </span>
                            <span>Portfolio</span>
                        </Link>
                        <div className="aic-study-logo">
                            <span>
                                <img src={require(`${currentStudy.logo}`)} alt={currentStudy.text} />
                            </span>
                        </div>

                        <div className="aic-study-links">
                            {
                                currentStudy.links.map((item, index) => <a key={index} className="aic_study-links__item" href={item.url} target="_blank">{item.text}</a>)
                            }
                        </div>

                        <div className="aic-study-content">
                            
                        </div>
                    </section>
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