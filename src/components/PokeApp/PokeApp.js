import React from 'react';

class PokeApp extends React.Component {

    componentDidMount() {
        fetchNewPokemons() {
            this.fetchPokemons()
              .then(data => {
                console.log(data.results);
              });
          }
    }
    render() {
        return (
            
            <p>hola</p>
        );
    }
}

export default PokeApp;