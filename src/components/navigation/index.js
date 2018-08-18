import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navigation.scss';

class Navigation extends Component {
    render() {
        const navItems = [
            {
                url: '/about',
                text: 'About',
            },
            {
                url: '/portfolio',
                text: 'Portfolio',
            },
            {
                url: '/',
                text: 'aic',
                className: 'aic-logo'
            },
            {
                url: '/contact',
                text: 'Contact',
            }
        ];

        return(
            <nav className="aic-navigation aic-pull-forward">
                <div className="aic-navigation__content">
                    {
                        navItems.map(item => <Link key={item.url} to={item.url} className={ item.className ? `${item.className} aic-navigation__item` : 'aic-navigation__item'}><span>{item.text}</span></Link>)
                    }
                    <a target="_blank" rel="noopener noreferrer" href="https://bubinga.co/blog" className="aic-navigation__item"><span>Blog</span></a>
                </div>
            </nav>
        )
    }
}

export default Navigation;