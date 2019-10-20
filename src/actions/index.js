export const increment = (num) => {
    return {
        type: 'INCREMENT',
        payload: num
    };
};
export const decrement = (num) => {
    return {
        type: 'DECREMENT',
        payload: num
    };
};

export const login = () => {
    return {
        type: 'SIGN_IN'
    };
};

export const AllUsers = () => {
    return {
        type: 'GET_USERS'
    };
};

function validatePokemonNumber(num) {
    num = parseInt(num);
    return (num > 0 && typeof num == 'number') ? num : 0;
}

export const GetPokemon = (num = 0) => {
    return {
        type: 'GET_POKEMON',
        payload: validatePokemonNumber(num)
    };
};

//API REQUEST Actions
export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECIEVE_API_DATA = "RECIEVE_API_DATA";
export const requestApiData = () => {
    return {
        type: 'REQUEST_API_DATA'
    };
};
export const recieveApiData = data => {
    return {
        type: 'RECIEVE_API_DATA',
        data: data
    };
};