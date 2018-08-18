import React, { Component } from 'react';
import PageTitle from '../pageTitle';
import ExternalResource from './externalResource';
import Codepen from './codepen.svg';
import Github from './github.svg';
import Linkedin from './linkedin.svg';
import Pdf from './pdf.svg';
import Twitter from './twitter.svg';
import './externalResources.scss';

class ExternalResources extends Component {
    render() {
        const links = [
            {
                text: 'Github',
                url: 'https://github.com/andrewicarlson',
                icon: Github
            },
            {
                text: 'LinkedIn',
                url: 'https://linkedin.com/in/andrewicarlson',
                icon: Linkedin
            },
            {
                text: 'Résumé',
                url: 'mailto:hello@andrewicarlson.com',
                icon: Pdf
            },
            {
                text: 'Twitter',
                url: 'https://twitter.com/andrewicarlson',
                icon: Twitter
            },
            {
                text: 'Codepen',
                url: 'https://codepen.io/andrewicarlson',
                icon: Codepen
            },
        ];

        return (
            <section className="aic-content aic-pull-forward">
                <PageTitle text="Resources"/>
                <div className="aic-resources">
                    {
                        links.map(link => <ExternalResource newTab={!link.url.indexOf('mailto')} key={link.url} url={link.url} text={link.text} icon={link.icon} />)
                    }
                </div>
            </section>
        )
    }
}

export default ExternalResources;