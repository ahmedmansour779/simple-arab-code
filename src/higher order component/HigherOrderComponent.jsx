import React, { Component } from 'react';
import ClickCounter from './components/ClickCounter';
import HoverCount from './components/HoverCount';

class HigherOrderComponent extends Component {

    render() {
        return (
            <div>
                <ClickCounter name="ahmed" />
                <HoverCount />
            </div>
        )
    }
}

export default HigherOrderComponent;
