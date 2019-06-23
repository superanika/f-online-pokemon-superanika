import React from 'react';
import './DetailCard.scss';
import {Link} from 'react-router-dom';
import {Colors} from '../Colors.js';


class DetailCard extends React.Component {
    render() {
        const {pokemons} = this.props;

        return (
            <React.Fragment>
               
                {pokemons.map(item =>
                    item.name === this.props.match.params.name ?
                        <div className="detailCard__wrapper" key={item.id}>
                             <div className="pic__container" style={item.types.length === 2 ? {backgroundImage: `linear-gradient(90deg, ${Colors[item.types[0].type.name]} 50%, ${Colors[item.types[1].type.name]} 50%)`} : {backgroundColor: Colors[item.types[0].type.name]}} >
                                <Link to="/" className="back__arrow"><i className="fas fa-times-circle"></i></Link>
                                <p className="message">hover me to see my back!</p>
                                <img src={item.sprites.front_default} alt={item.name} className="pokemon__pic" onMouseEnter={e => (e.currentTarget.src = item.sprites.back_default)} onMouseOut={e => (e.currentTarget.src = item.sprites.front_default)}/>
                            </div>
                            <div className="details__container">
                                <h2 className="pokemon__name">{item.name}</h2> 
                                <div className="poke__size">
                                    <p className="poke__height">Height: {item.height / 10} m</p>
                                    <p className="poke__weight">Weight: {item.weight / 10} Kg</p>
                                </div>
                                <h3 className="ability__title">Abilities</h3>
                                <ul className="abilities__list">
                                    {item.abilities.map((item,index) =>
                                        <li key={index} className="ability__item">{item.ability.name}</li>
                                    )}
                                </ul>
                                    {item.evolution === null ? '' : <p className="evolution__detail">Evolves from  <Link to={`/DetailCard/${item.evolution.name}`} className="evo__link">{item.evolution.name}</Link></p> }
                            </div>
                        </div>
                    : ''
                    )}
            </React.Fragment>
                    
        );
    }
}

export default DetailCard;

