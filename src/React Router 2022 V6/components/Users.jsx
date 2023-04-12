import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

function Users() {
    const [searchParams, setSearchParams] = useSearchParams({})
    const showActiveUsers = searchParams.get("filter") === "active"

    return (
        <div>
            <h1>User 1</h1>
            <h1>User 2</h1>
            <h1>User 3</h1>
            <Outlet />
            <button onClick={() => setSearchParams({ filter: "active" })}>
                active users
            </button>
            <button onClick={() => setSearchParams({})}>
                reset filter
            </button>
            {
                showActiveUsers ?
                    (<h2>showing active users</h2>) :
                    (<h2>showing all users</h2>)
            }
        </div>
    )
}

export default Users