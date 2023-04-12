import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()

    return (
        <>
            <div>home</div>
            <button onClick={() => navigate("order-summary")}>Place holder</button>
        </>
    )
}

export default Home