import React, { useContext } from 'react';
import { CountContext } from './mainReducer';

function ComponentB() {
    const countCountext = useContext(CountContext);
    return (
        <div>
            <button onClick={() => countCountext.countDispatch("increment")}>increment</button>
            <button onClick={() => countCountext.countDispatch("decrement")}>decrement</button>
            <button onClick={() => countCountext.countDispatch("reset")}>reset</button>
        </div>
    )
}

export default ComponentB;