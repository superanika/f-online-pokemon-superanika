import React from 'react';

class SearchField extends React.Component {
    render() {
      const {handleInputValue} = this.props;
      return (
        <div className="search__field">
          <label htmlFor="" className="search__title">Busca</label>
          <input type="text" onChange= {handleInputValue}/>
        </div>
      );
    }
}
export default SearchField;