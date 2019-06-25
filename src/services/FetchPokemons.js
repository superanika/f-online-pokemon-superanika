const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/?limit=25';

const fetchPokemons = () => {
    let pokemons = [];
    return fetch(ENDPOINT)
        .then(response => response.json())
        .then(data => {
            data.results.forEach(item => {
                let pokemon = fetch(`${item.url}`)
                    .then(response => response.json())
                    .then(pokemon =>
                        fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`)
                            .then(response => response.json())
                            .then(pokemonEvolution => {
                                pokemon.evolution = pokemonEvolution.evolves_from_species;
                                return pokemon;
                            })
                    )
                pokemons.push(pokemon);
            });
            return Promise.all(pokemons);
        })
}

export { fetchPokemons };

