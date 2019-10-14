import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { decrement, increment, login} from "../../actions";
import Button from '@material-ui/core/Button';

function Home() {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();



    return (
        <div className="App">
            <h1>home Page</h1>
            <Button variant="contained" color="primary" onClick={() => dispatch(decrement(1))}>-</Button>
            <Button variant="contained" color="primary" onClick={() => dispatch(increment(1))}>+</Button>
            <h2>counter {counter}</h2>

            <Button variant="contained" color="primary" onClick={() =>dispatch(login())}>signin</Button>
            {!isLogged ? <h2>not logged in</h2> : <h2>logged in</h2>}



        </div>
    );
}

export default Home;