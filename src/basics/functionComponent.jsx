import { React, useState } from "react";

export default function BasicsApp() {
    const [count, setCont] = useState(0)

    return (
        <>
            <button onClick={() => {
                setCont(count + 1)
            }}>plus</button>

            <button onClick={() => {
                setCont(count - 1)
            }}>minus</button>

            <button onClick={() => {
                setCont(0)
            }}>reset</button>

            {count}
        </>
    );
}