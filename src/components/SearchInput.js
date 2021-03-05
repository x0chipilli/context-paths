import React, {useContext} from 'react'
import {PokemonContext} from '../PokemonContext'
import './SearchInput.css'

function SearchInput() {
  const {pokemon, setPokename, input, setInput} = useContext(PokemonContext)

  const formatPokename = (name) => {
    let pokemonName = name.toLowerCase()
    
    if (pokemonName.indexOf(' ') >= 0) {
      pokemonName = pokemonName.split(' ').join('-')
    }

    setPokename(pokemonName)
  }

  return(
    <div className="search-input-container">
      <input 
        style={{backgroundColor: pokemon.colors.sec}}
        type="text" 
        placeholder="Search a pokemon"
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        style={{backgroundColor: pokemon.colors.sec}}
        onClick={() => formatPokename(input)}
      >🔍</button>
    </div>
  )
}

export default SearchInput