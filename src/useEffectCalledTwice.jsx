import React, { useEffect, useRef } from 'react';

const UseEffectCalledTwice = () => {
    // * exampel one
    useEffect(() => {
        let listener = () => {
            // console.log("clicked")
        }
        document.addEventListener("click", listener);
        return () => {
            document.removeEventListener("click", listener);
        }
    }, [])

    // * exampel two
    const shouldLog = useRef(true);
    useEffect(() => {
        if (shouldLog.current) {
            // console.log("clicked");
            shouldLog.current = false;
        }
    }, [])
    return (
        <div>UseEffectCalledTwice</div>
    )
}

export default UseEffectCalledTwice

// ! we make clane uo for useEffect functions 