import {React, Component} from 'react'
import './PokemonCard.css'
import {PokemonContext} from '../PokemonContext'

class PokeCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="pokecard-container">
        <div className="card-bg"
        style={{backgroundColor: this.context.pokemon.colors.sec}}
        >
          <span className="card-id"
            style={{color: this.context.pokemon.colors.main}}
          >
            #{this.context.pokemon.id}
          </span>
          <img src={this.context.pokemon.artwork} alt=""/>
        </div>
        <h2 style={{color: this.context.pokemon.colors.text}}>
          {this.context.pokemon.name}
        </h2>
      </div>
    )
  }
}

PokeCard.contextType = PokemonContext

export default PokeCard