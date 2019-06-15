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
      const {pokemons}= this.state;
    return (
      <div className="App">
        <ul className='pokemon__list'>  
          {
            pokemons.sort((a, b) => a.id - b.id)
            .map(item =>
              <li key={item.id} id={item.id} className='list__item'>
                <div className="img__container">
                  <img src={item.sprites.front_default} alt={item.name} className="pokemon__img"/>
                </div>
                <p className="pokemon__id">ID/{item.id}</p>
                <div className="info__container">
                  <h1 className="pokemon__name">{item.name}</h1>
                  <ul className="types__list">
                  {item.types.map((item, index) => 
                    <li className="type__item" key={index}>{item.type.name}</li>
                    )}
                  </ul>

                </div>
              </li>
            )
          }
          
        </ul>
      </div>
    );

  }
}

export default App;
