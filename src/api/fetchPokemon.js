const fetchPokemon = async () => {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/1/");
        const data = await response.json();
        console.log(data);
        return JSON.stringify(data);
    } catch (e) {
        console.log(e);
    }
}

export default fetchPokemon;