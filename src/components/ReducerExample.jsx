import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement': 
            return {count: state.count - 1};
        default: 
            throw new Error()
    }
}

export const ReducerExample = (props) => {

    const [state, dispatch] = useReducer(reducer, {count: 0})

    return (
        <>
            <button onClick={() => dispatch({type:'increment'})}>+1</button>
            <button onClick={() => dispatch({type:'decrement'})}>-1</button>
            {state.count}
        </>
    )
} 