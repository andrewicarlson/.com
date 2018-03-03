import React, { Component } from 'react';
import './externalResource.scss';

class ExternalResource extends Component {
    render() {
        return (
            <a target="_blank" href={this.props.url} className="aic-resource">
                <img src={this.props.icon} alt={this.props.text} className="aic-resource__img" />
                <span className="aic-resource__text">{this.props.text}</span>
            </a>
        )
    }
}

export default ExternalResource;