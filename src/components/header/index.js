import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return(
            <header className="aic-header">
                <Link to="/" className="aic-logo">aic</Link>
            </header>
        )
    }
}

export default Header;