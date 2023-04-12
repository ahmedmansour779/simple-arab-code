import React from 'react';
import useCount from './useCount';

const CountTwo = () => {
    const [count, increment, decrement, reset] = useCount(2, 1)
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default CountTwo;