import React, { useCallback, useState } from 'react';
import Button from './button';
import Count from './count';
import Title from './title';


function ParentComponent() {
    const [age, setAge] = useState(20)
    const [salary, setSalary] = useState(8000)
    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])
    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])
    return (
        <div>
            <Title />
            <Count text="Age" count={age} />
            <Button handleClick={incrementAge}>increment age</Button>
            <Count text="Salary" count={salary} />
            <Button handleClick={incrementSalary}>increment salary</Button>
        </div>
    )
}

export default React.memo(ParentComponent);

// nots

// useCallback(() => {}, []);
// useCallback( function what you do , varabal]);