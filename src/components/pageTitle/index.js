import React, { Component } from 'react';
import './pageTitle.scss';

class PageTitle extends Component {
    render() {
        return(
            <h1 className="aic-typography--title aic-page-title--lined">
                <span className="aic-page-title--inner">{this.props.text}</span>
            </h1>
        )
    }
}

export default PageTitle;