import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {increment} from "./actions";
import {decrement} from "./actions";
import {login} from "./actions";



function App() {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <h1>helloworld</h1>
          <button onClick={() => dispatch(decrement(1))}>-</button>
          <button onClick={() => dispatch(increment(1))}>+</button>
          <h2>counter {counter}</h2>

          <button onClick={() =>dispatch(login())}>signin</button>
          {!isLogged ? <h2>not logged in</h2> : <h2>logged in</h2>}
      </header>
    </div>
  );
}

export default App;
