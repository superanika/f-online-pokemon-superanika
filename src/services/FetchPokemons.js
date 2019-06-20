const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/?limit=25';
const fetchPokemonsInfo = (item) => {
    fetch(`${item.url}`)
    .then(response => response.json())
    .then(data => this.setState ({
      pokemons: [...this.state.pokemons, data]
    })
    )
}

const fetchPokemons = () => {
    let pokemons = [];

    fetch(ENDPOINT)
        .then(response => {
               return  response.json()
                            .forEach(item => {
                                  fetchPokemonsInfo(item).then(response => pokemons = [...pokemons, response.json()])

                        })
            })
    return pokemons;
    }

export { fetchPokemons };