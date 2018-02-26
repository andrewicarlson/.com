import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return(
            <header className="aic-header">
                <Link to="/" class="aic-logo">aic</Link>
            </header>
        )
    }
}

export default Footer;