import React from 'react';
import './App.scss';

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
      fetch('https://pokeapi.co/api/v2/pokemon/?limit=25')
        .then(response => response.json())
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
      const {pokemons}= this.state;
      const {inputValue}= this.state;

    return (

      <div className="App">
        <h1 className="title">Pokedex</h1>
        <div className="search__field">
          <label htmlFor="" className="search__title">Busca</label>
          <input type="text" onChange= {this.handleInputValue}/>
        </div>
        <ul className='pokemon__list'>  
          {
            pokemons.sort((a, b) => a.id - b.id)
            .filter(item => item.name.toLowerCase().includes(inputValue.toLowerCase()))
            .map(item =>
              <li key={item.id} id={item.id} className='list__item'>
                <div className="img__container">
                  <img src={item.sprites.front_default} alt={item.name} className="pokemon__img"/>
                </div>
                <p className="pokemon__id">ID/{item.id}</p>
                <div className="info__container">
                  <h2 className="pokemon__name">{item.name}</h2>
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
