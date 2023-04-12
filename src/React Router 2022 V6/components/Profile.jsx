import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';

function Profile() {
    const auth = useAuth()
    const navigation = useNavigate();
    const handelLogout = () => {
        auth.logout()
        navigation("/", { replace: true })
    }
    return (
        <div>
            <h1>welcom {auth.user} </h1>
            <button
                type='button'
                onClick={handelLogout} >
                logout
            </button>
        </div>
    )
}

export default Profile