import React, { useEffect, useRef, useState } from 'react';

const UseRef = () => {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef(null)
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1)
        }, 1000);
        return () => {
            clearInterval(intervalRef.current)
        }
    }, []);

    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    }, [])
    return (
        <div>
            <input ref={inputRef} type="text" />
            <hr />
            <h1>Timer - {timer}</h1>
            <button onClick={() => { clearInterval(intervalRef.current) }}>
                clear timer
            </button>
        </div>
    )
}

export default UseRef;