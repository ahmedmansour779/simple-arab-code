import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from './Auth'

function NavBar() {
    const auth = useAuth()
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/products">Products</Link>
                <Link to="/users">users</Link>
                <Link to="/profile">profile</Link>
                {
                    !auth.user && (
                        <Link to="/login">login</Link>
                    )
                }
            </nav>
            <nav>
                <Link to="/"><button>Home</button></Link>
                <Link to="/about"><button>About</button></Link>
                <Link to="/contact"><button>Contact</button></Link>
                <Link to="/products"><button>Products</button></Link>
                <Link to="/users"><button>users</button></Link>
                <Link to="/profile"><button>profile</button></Link>
                {
                    !auth.user && (
                        <Link to="/login"><button>login</button></Link>
                    )
                }
            </nav>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/users">users</NavLink>
                <NavLink to="/profile">profile</NavLink>
                {
                    !auth.user && (
                        <NavLink to="/login">login</NavLink>
                    )
                }
            </nav>
        </>
    )
}

export default NavBar