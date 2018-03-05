import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import PageTitle from '../../pageTitle';
import Gatorade from './gatorade.png';
import Ford from './ford.png';
import FirstTennessee from './firsttennessee.png';
import P66 from './p66.png';
import Honeywell from './honeywell.png';
import './portfolio.scss';

class Portfolio extends Component {
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
        ].map(item => <img key={item.text} className="aic-portfolio__item" src={item.img} alt={item.text} />);

        const weekends = [
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
        ].map(item => 
            <Link to="">
                <img key={item.text} className="aic-portfolio__item" src={item.img} alt={item.text} />
            </Link>
        );

        const weekdayRows = this.chunkItems(weekdays);
        const weekendRows = this.chunkItems(weekends);

        return(
            <div className="aic-view">
                <section className="aic-content aic-pull-forward">
                    <PageTitle text="Weekdays" />
                    <div className="aic-portfolio-group">
                        {
                            weekdayRows.map(item => <div key={item} className="aic-portfolio__row">{item}</div> )
                        }
                    </div>
                </section>

                <section className="aic-content aic-pull-forward">
                    <PageTitle text="Weekends" />
                    <div className="aic-portfolio-group">
                        {
                            weekendRows.map(item => <div key={item} className="aic-portfolio__row">{item}</div> )
                        }
                    </div>
                </section>
            </div>
        );
    }
}

export default Portfolio;