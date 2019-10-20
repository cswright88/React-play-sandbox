import React from 'react';
import {GetPokemon} from "../../actions";
import {useDispatch, useSelector} from "react-redux";

function Pokemon() {
    const pokemon = useSelector(state => state.pokemon);
    const dispatch = useDispatch();
    return (
        <div className="header">
            <h1>Pokemon</h1>

            <button onClick={() =>dispatch(GetPokemon())}>
                Get Users Example API Call
            </button>
            <p>{pokemon}</p>
        </div>
    );
}

export default Pokemon;