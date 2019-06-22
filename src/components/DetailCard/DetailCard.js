import React from 'react';
import './DetailCard.scss';

class DetailCard extends React.Component {
    render() {
        const {pokemons} = this.props;

        return (
            pokemons.map(item =>
                item.name === this.props.match.params.name ?
                    <div className="detailCard__wrapper">
                        <div className={item.types.length === 2 ? `pic__container ${item.types[0].type.name}-${item.types[1].type.name}` : `pic__container ${item.types[0].type.name}`}>
                            <p className="message">hover me to see my back!</p>
                            <img src={item.sprites.front_default} alt={item.name} className="pokemon__pic" onMouseEnter={e => (e.currentTarget.src = item.sprites.back_default)} onMouseOut={e => (e.currentTarget.src = item.sprites.front_default)}/>
                        <p className="pokemon__id">ID/{item.id}</p>
                        </div>
                        <div className="details__container">
                            <h2 className="pokemon__name">{item.name}</h2>
                            <p className="poke__height">Height: {item.height * 10} cm</p>
                            <p className="poke__weight">Weight: {item.weight / 10} Kg</p>
                            <ul className="abilities__list">
                                <li className="ability__item"><h3 className="ability__title">Abilities</h3></li>
                                {item.abilities.map((item,index) =>
                                    <li key={index} className="ability__item">{item.ability.name}</li>
                                )}
                            </ul>
                            {/* {item.evolution === null ? '' : <p className="evolution">Evoluciona de <span className="poke__evo">{item.evolution.name}</span></p>} */}
                        </div>
                    </div>
                : ''
                )
        );
    }
}

export default DetailCard;

