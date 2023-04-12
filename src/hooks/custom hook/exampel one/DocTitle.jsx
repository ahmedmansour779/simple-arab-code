import React, { useState } from 'react'
import useDocTitle from './useDocTitle'

function ExampelOne() {
    const [count, setCount] = useState(0)
    useDocTitle(count)
    return (
        <div>
            <button onClick={() => { setCount(count + 1) }}>increment</button>
        </div>
    )
}

export default ExampelOne