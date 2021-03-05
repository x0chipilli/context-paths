import {React, Component} from 'react'
import './PokeCard.css'

class PokeCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="pokecard-container">
        <div className="card-bg"
        style={{backgroundColor: this.props.pokemon.colors.sec}}
        >
          <span className="card-id"
            style={{color: this.props.pokemon.colors.main}}
          >
            #{this.props.pokemon.id}
          </span>
          <img src={this.props.pokemon.artwork} alt=""/>
        </div>
        <h2 style={{color: this.props.pokemon.colors.text}}>
          {this.props.pokemon.name}
        </h2>
      </div>
    )
  }
}

export default PokeCard