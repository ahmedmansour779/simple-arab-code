import React, { useEffect, useMemo, useState } from 'react'

export default function UseMemo() {
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)
    const [isEvenCountTwoTwo, setIsEvenCountTwoTwo] = useState("even")

    const incrementCountOne = () => {
        setCountOne(countOne + 1)
        console.log("karem")
    }
    const incrementCountTwo = () => {
        setCountTwo(countTwo + 1)
    }

    const reset = useMemo(() => {
        console.log("reset")
        setCountOne(0);
        setCountTwo(0);
    }, [])

    const isEvenCountOne = useMemo(() => {
        let i = 0;
        while (i < 200_000_000) i++;
        console.log("isEvenCountOne");
        return (countOne % 2 === 0);
    }, [countOne]);

    const isEven = (num) => {
        num % 2 === 0 ?
            setIsEvenCountTwoTwo("even") :
            setIsEvenCountTwoTwo("odd")
    }

    useEffect(() => {
        let i = 0;
        while (i < 200_000_000) i++;
        isEven(countTwo)
        console.log("isEvenCountTwo")
    }, [countTwo])


    // console.log("render")

    return (
        <div>
            <h1>use Memo</h1>

            <button onClick={incrementCountOne}>count One - {countOne}</button>
            <div>{isEvenCountOne ? "even" : "odd"}</div>

            <button onClick={incrementCountTwo}>count Two - {countTwo}</button>
            <div>{isEvenCountTwoTwo}</div>

            <button onClick={reset}>reset</button>
        </div>
    )
}

// nots

// useMemo like useCallback but this use in function and useCallback use in export function
// useMemo retern result value true or false but useCallback retern only function
// useMemo and useCallback use to optimize for performance