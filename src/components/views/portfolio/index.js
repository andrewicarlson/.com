import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import PageTitle from '../../pageTitle';
import Gatorade from './gatorade.png';
import Ford from './ford.png';
import FirstTennessee from './firsttennessee.png';
import P66 from './p66.png';
import Honeywell from './honeywell.png';
import './portfolio.scss';
import CaseStudy from './caseStudy';

class PortfolioComponent extends Component {
    chunkItems(items) {
        const rows = Math.ceil(items.length) / 5 * 2;
        const chunks = [];

        for(let i = 0; i < rows; i++) {
            if(i % 2 === 0) {
                chunks.push(items.splice(0, 3));
            } else {
                chunks.push(items.splice(0, 2));
            }
        }

        return chunks;
    }

    render() {
        const weekdays = [
            {
                img: Ford,
                text: 'Ford'
            },
            {
                img: FirstTennessee,
                text: 'FirstTennessee Bank'
            },
            {
                img: Gatorade,
                text: 'Gatorade'
            },
            {
                img: P66,
                text: 'Phillips66'
            },
            {
                img: Honeywell,
                text: 'Honeywell'
            }
        ].map(item => <div><img key={item.text} className="aic-portfolio__item" src={item.img} alt={item.text} /></div>);

        const weekends = [
            {
                img: Ford,
                text: 'Ford',
                className: 'aic-portfolio__link--animate',
                path: '/portfolio/ford'
            },
            {
                img: FirstTennessee,
                text: 'FirstTennessee Bank'
            },
            {
                img: Gatorade,
                text: 'Gatorade'
            },
            {
                img: P66,
                text: 'Phillips66'
            },
            {
                img: Honeywell,
                text: 'Honeywell'
            }
        ].map(item => 
            <div>
                {item.path && 
                    <Link className="aic-portfolio__link" to={item.path}>
                        <img key={item.text} className={"aic-portfolio__item " + item.className} src={item.img} alt={item.text} />
                    </Link>
                }

                {!item.path && 
                    <img key={item.text} className="aic-portfolio__item" src={item.img} alt={item.text} />
                }
            </div>
        );

        return(
            <div className="aic-view">
                <section className="aic-content aic-pull-forward">
                    <PageTitle text="Weekdays" />
                    <div className="aic-portfolio-group">
                        {
                            this.chunkItems(weekdays).map(item => <div key={item} className="aic-portfolio__row">{item}</div> )
                        }
                    </div>
                </section>

                <section className="aic-content aic-pull-forward">
                    <PageTitle text="Weekends" />
                    <div className="aic-portfolio-group">
                        {
                            this.chunkItems(weekends).map(item => <div key={item} className="aic-portfolio__row">{item}</div> )
                        }
                    </div>
                </section>
            </div>
        );
    }
}

class Portfolio extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/portfolio" component={PortfolioComponent} />
                <Route path="/portfolio/:study" component={CaseStudy} />
            </Switch>
        )
    }
}

export default Portfolio;