import React, { Component } from 'react';
import './hexBackground.scss';

class HexBackground extends Component {
    constructor(props) {
        super(props);

        this.state = {
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        };
    }
    
    /**
     * If there are not enough SVG's on the screen, fill the space. Otherwise leave well enough alone.
     */
    resize() {
        if(this.state.windowHeight < window.innerHeight || this.state.windowWidth < window.innerWidth) {
            this.setState({
                windowHeight: window.innerHeight,
                windowWidth: window.innerWidth
            });
        }
    }

    /**
     * Add window listener when the component mounts, no matching synthetic events right now.
     */
    componentDidMount() {
        window.addEventListener('resize', this.resize.bind(this));
    }

    /**
     * Remove window listener when the component unmounts. 
     */
    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    render() {
        /**
         * Add inline SVGs as strings because JSX doesn't support namespaced XML attributes.
         */
        const patternSvgString = '<svg class="aic-hex__svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"> <defs> <radialGradient id="GradientFront" cx="50%" cy="50%" r="75%" > <stop offset="0%" style="stop-color:rgb(255,255,255);stop-opacity:1" /> <stop offset="100%" style="stop-color:rgb(244,244,244);stop-opacity:1" /> </radialGradient> <radialGradient id="GradientBack" cx="50%" cy="50%" r="75%" > <stop offset="100%" style="stop-color:rgb(255,255,255);stop-opacity:1" /> <stop offset="0%" style="stop-color:rgb(244,244,244);stop-opacity:1" /> </radialGradient> </defs> </svg>';
        const hexSvgString = '<svg class="aic-hex__svg--front aic-hex__svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10px" height="11" viewBox="0 0 10 11" enable-background="new 0 0 10 11" xml:space="preserve"> <polygon fill="url(#GradientFront)" stroke="#a5a5af" stroke-width=".10" points="10,8.532 5,11.376 0,8.532 0,2.844 5,0 10,2.844 "/> </svg><svg class="aic-hex__svg--back aic-hex__svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10px" height="11" viewBox="0 0 10 11" enable-background="new 0 0 10 11" xml:space="preserve"> <polygon class="poly-back" fill="url(#GradientBack)" stroke="#a5a5af" stroke-width=".1" points="10,8.532 5,11.376 0,8.532 0,2.844 5,0 10,2.844 "/> </svg>';
        const svgWidth = 50;
        const svgHeight = 55;
        const excess = 5;
        const rows = Math.round(this.state.windowHeight / svgHeight) + excess;
        const cols = Math.round(this.state.windowWidth / svgWidth) + excess;
        let svgRows = [];

        for(let i = 0; i < rows; i++) {
            const row = [];
            
            for(let x = 0; x < cols; x++) {
                row.push(
                    <div key={x} className="aic-hex-bg__item">
                        <div key={x} className="aic-hex-bg__item-core" dangerouslySetInnerHTML={{ __html: hexSvgString }}></div>
                    </div>
                );
            }

            svgRows.push(row);
        }
        
        return (
            <div className="aic-hex-bg">
                <div dangerouslySetInnerHTML={{ __html: patternSvgString }}></div>
                {
                    svgRows.map(row => <div key={svgRows.indexOf(row)} className="aic-hex-bg__row">{row}</div>)
                }
            </div>
        );
    }
}

export default HexBackground;