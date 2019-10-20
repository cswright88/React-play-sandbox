const pokemonReducer = (state = "", { type, data }) => {
    if (type === 'RECIEVE_API_DATA') {
        return data;
    } else {
        return state;
    }
};
export default pokemonReducer;


