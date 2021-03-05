import {React, Component} from 'react'
import './SearchInput.css'

class SearchInput extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="search-input-container">
        <input 
          style={{backgroundColor: this.props.colors.sec}}
          type="text" 
          placeholder="Search a pokemon"
          onChange={(e) => this.props.setInput(e.target.value)}
        />
        <button
          style={{backgroundColor: this.props.colors.sec}}
          onClick={() => this.props.formatPokename(this.props.input)}
        >🔍</button>
      </div>
    )
  }
}

export default SearchInput