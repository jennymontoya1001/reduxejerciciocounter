import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as action from './actions';

export const App = () => {

    const count = useSelector(store => store.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={() => dispatch(action.increment())}>Increment</button>
            <button onClick={() => dispatch(action.decrement())}>Decrement</button>
            <button onClick={() => dispatch(action.reset())}>Reset</button>
        </div>
    )
}
