import React from 'react';
import ReactDOM from 'react-dom';

const Portal = () => {
    return (
        ReactDOM.createPortal(
            <h1>ahmed</h1>,
            document.getElementById('model-root')
        )
    )
}

export default Portal