import {useContext} from 'react'
import { PokemonContext } from '../PokemonContext'
import './PokeCard.css'

function PokeCard() {
  const {pokemon} = useContext(PokemonContext)

  return (
    <div className="pokecard-container">
      <div className="card-bg"
        style={{backgroundColor: pokemon.colors.sec}}
      >
        <span className="card-id"
          style={{color: pokemon.colors.main}}
        >
          #{pokemon.id}
        </span>
        <img src={pokemon.artwork} alt=""/>
      </div>
      <h2 style={{color: pokemon.colors.text}}>
        {pokemon.name}
      </h2>
    </div>
  )
}

export default PokeCard