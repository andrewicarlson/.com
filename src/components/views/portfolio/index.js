import React, { Component } from 'react';
import PageTitle from '../../pageTitle';
import Gatorade from './gatorade.png';
import Ford from './ford.png';
import FirstTennessee from './firsttennessee.png';
import P66 from './p66.png';
import Honeywell from './honeywell.png';

class Portfolio extends Component {
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
        ];

        return(
            <div className="aic-view">
                <section className="aic-content aic-pull-forward">
                    <PageTitle text="Weekdays" />
                    <div>
                        {
                            weekdays.map(item => 
                                <img src={item.img} alt={item.text} />
                            )
                        }
                    </div>
                </section>

                <section className="aic-content aic-pull-forward">
                    <PageTitle text="Weekends" />
                </section>
            </div>
        );
    }
}

export default Portfolio;