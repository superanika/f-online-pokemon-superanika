import React from 'react';
import './App.scss';
import SearchField from '../SeachField/SearchField';
import PokeList from '../PokeList/PokeList';
import {fetchPokemons} from '../../services/FetchPokemons'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      pokemons: [],
      inputValue: ''
    }
    this.handleInputValue= this.handleInputValue.bind(this);
  }

  fetchPokemonsInfo (item) {
      fetch(`${item.url}`)
      .then(response => response.json())
      .then(data => this.setState ({
        pokemons: [...this.state.pokemons, data]
      })
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

    return (
      <div className="App">
        <h1 className="title">Pokedex</h1>
        <SearchField handleInputValue={this.handleInputValue} />
        <PokeList pokemons={pokemons} inputValue={inputValue} />
      </div>
    );
  }
}

export default App;
