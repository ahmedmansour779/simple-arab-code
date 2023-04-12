import { React, useState } from 'react';
import "./app.css";

export default function HookTest() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [isRed, setRed] = useState(false);
    const [isRed2, setRed2] = useState(false);
    const handelIncrement = () => {
        setCount(count + 1);
        setRed(true);
    };
    const handelIncrement2 = () => {
        setCount2(count2 + 1);
        setRed2(!isRed2);
    };

    return (
        <>
            <button onClick={handelIncrement}>
                Increment
            </button>
            <span id='test' className={count >= 10 ? "blau" : isRed ? "red" : ""}>{count}</span>
            <button onClick={handelIncrement2}>
                Increment with togel '!'
            </button>
            <span id='test2' className={isRed2 ? "red" : ""} >{count2}</span>
        </>
    )
}
