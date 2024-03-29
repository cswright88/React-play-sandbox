import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import userReducer from "./userReducer";

import { combineReducers } from "redux";
import pokemonReducer from "./pokemonReducer";

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    users: userReducer,
    pokemon: pokemonReducer
});

export default allReducers;


