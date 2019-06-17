import React from 'react';
import pikachu from '../../images/pikachu.png';
import './SearchField.scss';

class SearchField extends React.Component {
    render() {
      const {handleInputValue} = this.props;
      return (
        <div className="search__field">
          <label htmlFor="search" className="search__title"><img src={pikachu} alt="search" width= "75px" /></label>
          <input type="text" id= "search" className="search__input" onChange= {handleInputValue} placeholder= "Introduce un nombre" />
        </div>
      );
    }
}
export default SearchField;