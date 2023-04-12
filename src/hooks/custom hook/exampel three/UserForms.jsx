import React from 'react';
import useInput from './useInput';

function UserForms() {
    const [firstName, bindFirstName, resetFirstName] = useInput("first name", "");
    const [lastName, bindLastName, resetLastName] = useInput("last name", "");
    const handleSubmit = (e) => {
        // e.preventDefault();
        alert(`hallo ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    return (
        <div>
            <from onSubmit={handleSubmit}>
                <input {...bindFirstName} />
                <input {...bindLastName} />
                <button type="submit" onClick={handleSubmit}>submit</button>
            </from>
        </div>
    )
}

export default UserForms