import React from 'react';
import SearchField from './components/SearchField/SearchField';
import PokeList from './components/PokeList/PokeList';
import {fetchPokemons} from './services/FetchPokemons';
import './App.scss';
import {logo} from './images/Pokedex.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      pokemons: [],
      inputValue: ''
    }
    this.handleInputValue= this.handleInputValue.bind(this);
  }

  componentDidMount () {
    fetchPokemons()
      .then(data => {
        console.log(data)
        this.setState ({
          pokemons: data
        })
      })
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
        <h1 className="title" id="top"><img className="title__logo" src={logo} alt= "Pokedex logo" /></h1>
        <SearchField handleInputValue={this.handleInputValue} />
        <PokeList pokemons={pokemons} inputValue={inputValue} />
        <div className="link__top">
        <a href="#top" className="link">⇧</a>
        </div>
      </div>
    );
  }
}

export default App;
