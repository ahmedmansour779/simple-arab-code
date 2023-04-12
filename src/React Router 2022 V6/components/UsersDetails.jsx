import React from 'react';
import { useParams } from 'react-router-dom';

function UsersDetails() {
    // first way
    // const params = useParams();
    // const userId = params.userId;

    // second way
    const { userId } = useParams()

    return (
        <div>UsersDetails about {userId}</div>
    )
}

export default UsersDetails