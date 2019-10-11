import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AllUsers, decrement, increment, login} from "../../actions";

function Home() {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const allUsers = useSelector(state => state.users);
    const dispatch = useDispatch();



    return (
        <div className="App">
            <h1>home Page</h1>
            <button onClick={() => dispatch(decrement(1))}>-</button>
            <button onClick={() => dispatch(increment(1))}>+</button>
            <h2>counter {counter}</h2>

            <button onClick={() =>dispatch(login())}>signin</button>
            {!isLogged ? <h2>not logged in</h2> : <h2>logged in</h2>}

                <h1>Users</h1>
                <button onClick={() =>dispatch(AllUsers())}>
                    Get Users Example API Call
                </button>
                <p>{allUsers}</p>

        </div>
    );
}

export default Home;