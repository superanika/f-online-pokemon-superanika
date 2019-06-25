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

  componentDidMount () {
    fetchPokemons()
      .then(data => {
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
        <h1 className="title" ><img className="title__logo" src={logo} alt= "Pokedex logo" /></h1>
        <Switch>
          <Route exact path="/" render={() => (
            <Home pokemons={pokemons} 
                  inputValue={inputValue} 
                  handleInputValue= {this.handleInputValue}  /> 
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
