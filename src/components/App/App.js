import React from 'react';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      pokemons: [],
    }
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
      fetch('https://pokeapi.co/api/v2/pokemon/?limit=25')
        .then(response => response.json())
        .then(data => 
          data.results.map(item =>
            this.fetchPokemonsInfo(item)
          )
        );

  }

  render() {

    return (
      <div className="App">
        <ul>  
          
        </ul>
      </div>
    );

  }
}

export default App;
