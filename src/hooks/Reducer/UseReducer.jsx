/* eslint-disable no-lone-blocks */
import { React, useReducer } from 'react';
import Reducer, { initialState } from './reducer';

export default function UseReducer() {
    const [count, dispatch] = useReducer(Reducer, initialState)
    const [countTwo, dispatchTwo] = useReducer(Reducer, initialState)
    return (
        <div>
            <h1>count - {count}</h1>
            <button onClick={() => dispatch("increment")}>increment</button>
            <button onClick={() => dispatch("decrement")}>decrement</button>
            <button onClick={() => dispatch("reset")}>reset</button>
            {/* reducer two */}
            <h1>count - {countTwo}</h1>
            <button onClick={() => dispatchTwo("increment")}>increment</button>
            <button onClick={() => dispatchTwo("decrement")}>decrement</button>
            <button onClick={() => dispatchTwo("reset")}>reset</button>
        </div>
    )
}

// notes 

{/*
    reducer multiple its use to use reducer more once
*/}