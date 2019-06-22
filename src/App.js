import React from 'react';
import {fetchPokemons} from './services/FetchPokemons';
import './App.scss';
import {logo} from './images/Pokedex.png';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import DetailCard from './components/DetailCard/DetailCard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      pokemons: [],
      inputValue: ''
    }
    this.handleInputValue= this.handleInputValue.bind(this);
  }

  fetchPokemonsInfo(item) {
      fetch(`${item.url}`)
      .then(response => response.json())
      .then(data => 
        this.fetchEvolutions(data)
      )
  }
  fetchEvolutions (pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`)
    .then(response => response.json())
    .then(pokemonEvolution => {
        pokemon.evolution = pokemonEvolution.evolves_from_species;
        this.setState ({
          pokemons: [...this.state.pokemons, pokemon]
        })
      }
    )
  }

  componentDidMount () {
      fetchPokemons()
      .then(data => 
        data.results.map(item =>
          this.fetchPokemonsInfo(item)
        )
      );
  }

  handleInputValue (event) {
    const value = event.currentTarget.value;
    this.setState({
      inputValue: value
    })
  }

  render() {
      const {pokemons, inputValue}= this.state;
      const {handleInputValue} = this.props;

    return (
      <div className="App">
        <h1 className="title" id="top"><img className="title__logo" src={logo} alt= "Pokedex logo" /></h1>
        <Switch>
          <Route exact path="/" render={() => (
            <Home pokemons={pokemons} 
                  inputValue={inputValue} 
                  handleInputValue= {handleInputValue}  /> 
                  )}
          />
          <Route path="/DetailCard/:name" render={routerProps => (
            <DetailCard  pokemons = {pokemons} 
                          match={routerProps.match} />
                          )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
