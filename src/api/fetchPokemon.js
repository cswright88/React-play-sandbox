const fetchPokemon = async (action) => {
    let convertPayloadToString = String(action.payload);
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + convertPayloadToString + "/");
        const data = await response.json();
        console.log(data);
        return data;
    } catch (e) {
        console.log(e);
    }
}

export default fetchPokemon;