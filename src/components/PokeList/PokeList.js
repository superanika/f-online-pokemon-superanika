import React from 'react';
import Card from '../Card/Card';
import './PokeList.scss'

class PokeList extends React.Component {
    render () {
        const {pokemons, inputValue}= this.props;

        return (
            <ul className='pokemon__list'>  
            {
              pokemons.sort((a, b) => a.id - b.id)
              .filter(item => item.name.toLowerCase().includes(inputValue.toLowerCase()))
              .map(item =>
                <li key={item.id} id={item.id} className='list__item'>
                    <Card item = {item}/>
                </li>
              )
            }
          </ul>
                  );
    }
}
export default PokeList;