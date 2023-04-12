import React, { createContext, useReducer } from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
import reducer, { initialState } from "./UseReducerWithUseContext";

export const CountContext = createContext()

const MainReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <CountContext.Provider value={{ countState: count, countDispatch: dispatch }} >
                <h1>Count - {count}</h1>
                <ComponentA />
                <ComponentB />
                <ComponentC />
            </CountContext.Provider>
        </div>
    )
}

export default MainReducer;