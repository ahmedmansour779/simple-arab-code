import React, { useReducer } from "react";

const initialState = {
    firstCount: 0,
    secondCount: 2,
}
const reducer = (state, action) => {
    switch (action.type) {
        // first count
        case "increment":
            return { ...state, firstCount: state.firstCount + action.value }
        case "decrement":
            return { ...state, firstCount: state.firstCount - action.value }
        // second count
        case "incrementSecondCount":
            return { ...state, secondCount: state.secondCount + action.value }
        case "decrementSecondCount":
            return { ...state, secondCount: state.secondCount - action.value }
        // 5
        case "increment5":
            return { ...state, firstCount: state.firstCount + action.value }
        case "decrement5":
            return { ...state, firstCount: state.firstCount - action.value }
        // reset
        case "reset":
            return initialState
        default:
            return state;
    }
}

const UseReducerComplex = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>
                count - {count.firstCount}
            </h1>
            <button onClick={() => dispatch({ type: "increment", value: 1 })}>
                increment
            </button>
            <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
                decrement
            </button>
            <button onClick={() => dispatch({ type: "reset" })}>
                reset
            </button>
            <button onClick={() => dispatch({ type: "increment5", value: 5 })}>
                increment 5
            </button>
            <button onClick={() => dispatch({ type: "decrement5", value: 5 })}>
                decrement 5
            </button><br />
            <h1>
                count - {count.secondCount}
            </h1>
            <button onClick={() => dispatch({ type: "incrementSecondCount", value: 1 })}>
                increment
            </button>
            <button onClick={() => dispatch({ type: "decrementSecondCount", value: 1 })}>
                decrement
            </button>
            <button onClick={() => dispatch({ type: "reset" })}>
                reset
            </button>
        </div>
    )
}

export default UseReducerComplex

// nots

// ...state to save second value if you input more value