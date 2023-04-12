import React from 'react'
import { Link, Outlet } from 'react-router-dom'

// ? nested Router

function Products() {
    return (
        <>
            <input type="text" placeholder='search products ...' />
            <nav>
                <Link to="featured">Featured</Link>
                <Link to="new">new products</Link>
            </nav>
            <Outlet />
        </>
    )
}

export default Products