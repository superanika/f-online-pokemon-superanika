import React from 'react';

class Card  extends React.Component {
    render () {
        const {item} = this.props;
        return (
            <div className="card__wrapper">
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
            </div>
        );
    }
}

export default Card;