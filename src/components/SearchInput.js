import {React, Component} from 'react'
import './SearchInput.css'
import {PokemonContext} from '../PokemonContext'

class SearchInput extends Component {
  constructor(props) {
    super(props)
  }

  formatPokename = (name) => {
    let pokemonName = name.toLowerCase()
    
    if (pokemonName.indexOf(' ') >= 0) {
      pokemonName = pokemonName.split(' ').join('-')
    }

    this.context.setPokename(pokemonName)
  }

  render() {
    return (
      <div className="search-input-container">
        <input 
          style={{backgroundColor: this.context.pokemon.colors.sec}}
          type="text" 
          placeholder="Search a pokemon"
          onChange={(e) => this.context.setInput(e.target.value)}
        />
        <button
          style={{backgroundColor: this.context.pokemon.colors.sec}}
          onClick={() => this.formatPokename(this.context.input)}
        >🔍</button>
      </div>
    )
  }
}

SearchInput.contextType = PokemonContext

export default SearchInput