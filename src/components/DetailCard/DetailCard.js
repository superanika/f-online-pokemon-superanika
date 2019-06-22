import React from 'react';
import './DetailCard.scss';

class DetailCard extends React.Component {
    render() {
        return (
            <div className="detailCard__wrapper">
                 <div className={item.types.length === 2 ? `img__container ${item.types[0].type.name}-${item.types[1].type.name}` : `img__container ${item.types[0].type.name}`}>
                  <img src={item.sprites.front_default} alt={item.name} className="pokemon__img"/>
                  <p className="pokemon__id">ID/{item.id}</p>
                </div>
                <div className="info__container">
                  <h2 className="pokemon__name">{item.name}</h2>
                  {item.evolution === null ? '' : <p className="evolution">Evoluciona de <span className="poke__evo">{item.evolution.name}</span></p>}
                </div>


            </div>
        );
    }
}

export default DetailCard;

altura, peso, habilidades, imágenes del pokemon y sus evoluciones