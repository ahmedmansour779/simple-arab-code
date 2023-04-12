import React from 'react';
import useCount from './useCount';

const CountOne = () => {
    const [count, increment, decrement, reset] = useCount(0, 1)
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default CountOne;