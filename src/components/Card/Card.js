import React from 'react';
import './Card.scss';
import {Link} from 'react-router-dom';
import {Colors} from '../Colors.js';

class Card  extends React.Component {
    render () {
        const {item} = this.props;
        return (
          <Link to={`/DetailCard/${item.name}`} className="Details__link">
            <div className="card__wrapper">
                  <div className="img__container" style={item.types.length === 2 ? {backgroundImage: `linear-gradient(90deg, ${Colors[item.types[0].type.name]} 50%, ${Colors[item.types[1].type.name]} 50%)`} : {backgroundColor: Colors[item.types[0].type.name]}} >
                  <img src={item.sprites.front_default} alt={item.name} className="pokemon__img"/>
                  <p className="pokemon__id">ID/{item.id}</p>
                </div>
                <div className="info__container">
                  <h2 className="pokemon__name">{item.name}</h2>
                  <ul className="types__list">
                  {item.types.map((item, index) => {
                    switch(item.type.name) {
                      case 'grass': 
                         return  <li className="type__item" key={index}><span role="img" aria-label="grass" title="grass">🌱</span></li>
                      case 'poison':
                          return  <li className="type__item" key={index}><span role="img" aria-label="poison" title="poison">💀</span></li>
                      case  'bug':
                          return  <li className="type__item" key={index}><span role="img" aria-label="bug" title="bug">🐛</span></li>
                      case 'fire':
                          return  <li className="type__item" key={index}><span role="img" aria-label="fire" title="fire">🔥</span></li>
                      case 'flying':
                          return  <li className="type__item" key={index}><span role="img" aria-label="flying" title="flying">✈️</span></li>
                      case 'normal':
                          return  <li className="type__item" key={index}><span role="img" aria-label="normal" title="normal">🙂</span></li>
                      case 'water':
                          return  <li className="type__item" key={index}><span role="img" aria-label="water" title="water">💧</span></li>
                      case 'electric':
                          return  <li className="type__item" key={index}><span role="img" aria-label="electric" title="electric">⚡️</span></li>
                      default:
                          return  <li className="type__item" key={index}>{item.type.name}</li>
                    } 
                  })}
                  </ul>
                  {item.evolution === null ? '' : <p className="evolution">Evolves from <span className="poke__evo">{item.evolution.name}</span></p>}
                </div>
            </div>
          </Link>  
        );
    }
}

export default Card;