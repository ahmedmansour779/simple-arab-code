import { React, useEffect, useState } from 'react';

export default function UseEffect() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const loadMousePosition = (e) => {
        setX(e.clientX);
        setY(e.clientY);
    }
    const [count, setCount] = useState(0);
    const tick = () => {
        if (count < 10) {
            setCount(count + 1)
        } else {
            setCount(0)
        }
    }
    const rCount = () => {
        setCount(0)
    }

    useEffect(() => {
        window.addEventListener("mousemove", loadMousePosition)
    }, []);    // empty array : to not render more once
    useEffect(() => {
        const interval = setInterval(tick, 1000);
        return () => {
            clearInterval(interval);
        }
    })
    return (
        <>
            <div>
                <h1>X - {x}</h1>
                <h1>X - {y}</h1>
            </div>
            <div>
                {count}
                <button onClick={rCount}>reset count</button>
            </div>
        </>
    );
}
