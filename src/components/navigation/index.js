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
                url: '/contact',
                text: 'Contact',
            }
        ];

        return(
            <nav className="aic-navigation aic-pull-forward">
                <div className="aic-navigation__content">
                    {
                        navItems.map(item => <Link key={item.url} to={item.url} className="aic-navigation__item">{item.text}</Link>)
                    }
                    <a target="_blank" rel="noopener noreferrer" href="https://bubinga.co/blog" className="aic-navigation__item">Blog</a>
                </div>
            </nav>
        )
    }
}

export default Navigation;