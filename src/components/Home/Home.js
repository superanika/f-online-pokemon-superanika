import React from 'react';
import SearchField from '../SearchField/SearchField';
import PokeList from '../PokeList/PokeList';
import './Home.scss';


class Home extends React.Component {
   
    scroll() {
        window.scrollTo(0, 0);
    }

    render() {
        const {pokemons, inputValue, handleInputValue}= this.props;

        return (
            <React.Fragment>
                <SearchField handleInputValue={handleInputValue} inputValue={inputValue} />
                <PokeList pokemons={pokemons} inputValue={inputValue} />
                <div className="link" onClick={this.scroll}>
                    <i className="fas fa-arrow-up arrow__link"></i>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;