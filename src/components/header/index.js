import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

class Header extends Component {
    render() {
        return(
            <header className="aic-header">
                <Link to="/" className="aic-logo aic-pull-forward">
                    <span>aic</span>
                </Link>
            </header>
        )
    }
}

export default Header;