import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import PageTitle from '../../pageTitle';
import * as Images from './caseStudy/portfolio-content/images';
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
                img: Images.Ford,
                text: 'Ford'
            },
            {
                img: Images.FirstTennessee,
                text: 'FirstTennessee Bank'
            },
            {
                img: Images.Gatorade,
                text: 'Gatorade'
            },
            {
                img: Images.P66,
                text: 'Phillips66'
            },
            {
                img: Images.Honeywell,
                text: 'Honeywell'
            }
        ].map(item => <div key={item.text}><img className="aic-portfolio__item" src={item.img} alt={item.text} /></div>);

        const weekends = [
            {
                img: Images.DoubleMyDonation,
                text: 'Double My Donation',
                className: 'aic-portfolio__link--animate',
                url: 'https://doublemydonation.org'
            },
            {
                img: Images.HowDoIFeelToday,
                text: 'How do I feel today?',
                className: 'aic-portfolio__link--animate',
                url: 'https://github.com/andrewicarlson/howdoifeeltoday'
            },
            {
                img: Images.DebtChomper,
                text: 'Debtchomper',
                className: 'aic-portfolio__link--animate',
                url: 'https://debtchomper.com/'
            },
            {
                img: Images.Bpuzzld,
                text: 'Bpuzzld',
                className: 'aic-portfolio__link--animate',
                url: 'https://bpuzzld.com'
            },
            {
                img: Images.Molliepop,
                text: 'Molliepop',
                className: 'aic-portfolio__link--animate',
                url: 'https://molliepop.com'
            },
            {
                img: Images.Jig,
                text: 'Jig',
                className: 'aic-portfolio__link--animate',
                url: 'https://github.com/andrewicarlson/jig'
            },
            {
                img: Images.KcdcVoice,
                text: 'KCDC Voice',
                className: 'aic-portfolio__link--animate',
                url: 'https://github.com/andrewicarlson/kcdc-voice'
            }
        ].map(item => 
            <div key={item.text}>
                {item.url &&
                    <a className="aic-portfolio__link" target="_blank" href={item.url}>
                        <img className={"aic-portfolio__item " + item.className} src={item.img} alt={item.text} />
                    </a>
                }

                {!item.url &&
                    <img className="aic-portfolio__item" src={item.img} alt={item.text} />
                }
            </div>
        );

        return(
            <div className="aic-view">
                <section className="aic-content aic-pull-forward">
                    <PageTitle text="Weekdays" />
                    <div className="aic-portfolio-group">
                        {
                            this.chunkItems(weekdays).map((item, index) => <div key={index} className="aic-portfolio__row">{item}</div> )
                        }
                    </div>
                </section>

                <section className="aic-content aic-pull-forward">
                    <PageTitle text="Weekends" />
                    <div className="aic-portfolio-group">
                        {
                            this.chunkItems(weekends).map((item, index) => <div key={index} className="aic-portfolio__row">{item}</div> )
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