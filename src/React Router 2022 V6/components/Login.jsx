import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';

function Login() {
    const auth = useAuth()
    const navigate = useNavigate()
    const [user, setUser] = useState("")
    const location = useLocation()
    const redicrectPath = location.state?.path || "/";
    const handelLogin = () => {
        auth.login(user);
        navigate(redicrectPath, { replace: true })
    }

    return (
        <div>
            <label>
                username : {" "}
                <input
                    type="text"
                    name="username"
                    placeholder='user name'
                    onChange={(e) => { setUser(e.target.value) }} />
            </label>
            <button
                type='button'
                onClick={handelLogin}>
                login
            </button>
        </div>
    )
}

export default Login