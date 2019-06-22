import React from 'react';
import SearchField from '../SearchField/SearchField';
import PokeList from '../PokeList/PokeList';


class Home extends React.Component {
    render() {
        const {pokemons, inputValue, handleInputValue}= this.props;

        return (
            <React.Fragment>
                <SearchField handleInputValue={handleInputValue} />
                <PokeList pokemons={pokemons} inputValue={inputValue} />
                <div className="link__top">
                <a href="#top" className="link">⇧</a>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;