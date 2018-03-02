import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navigation.scss';

class Navigation extends Component {
    render() {
        const navItems = [
            {
                url: '/about',
                text: 'About'
            },
            {
                url: '/portfolio',
                text: 'Portfolio'
            },
            {
                url: '/Blog',
                text: 'Blog'
            },
            {
                url: '/contact',
                text: 'Contact'
            }
        ]
        return(
            <nav className="aic-navigation aic-pull-forward">
                {
                    navItems.map(item => <Link to={item.url} className="aic-navigation__item">{item.text}</Link>)
                }
            </nav>
        )
    }
}

export default Navigation;