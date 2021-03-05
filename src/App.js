import React, { Component } from 'react'
import './App.css';
import themes from './themes.js'
import PokeCard from './components/PokeCard'
import SearchInput from './components/SearchInput'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemon: undefined,
      pokename: 'ditto',
      input: ''
    }
  }

  async getPokemonData() {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.pokename}`)
    let pokeData = await res.json()
    let res2 = await fetch(pokeData.species.url)
    let pokeSpeciesData = await res2.json()

    this.setState({
      pokemon: {
        name: pokeData.name,
        id: pokeData.id,
        artwork: pokeData.sprites.other['official-artwork'].front_default,
        colors: themes[pokeSpeciesData.color.name]
      }
    })
  }

  formatPokename = (name) => {
    let pokemonName = name.toLowerCase()
    
    if (pokemonName.indexOf(' ') >= 0) {
      pokemonName = pokemonName.split(' ').join('-')
    }

    this.setState({
      pokename: pokemonName
    })
  }

  setInput = (value) => {
    this.setState({
      input: value
    })
  }

  componentDidMount() {
    this.getPokemonData()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.pokename !== this.state.pokename) {
      this.getPokemonData()
    }
  }

  render() {
    return(
      <div className="app"
        style={{backgroundColor: this.state.pokemon ? this.state.pokemon.colors.main : 'white'}}
      >

        {this.state.pokemon && <PokeCard pokemon={this.state.pokemon}/>}

        {this.state.pokemon && <SearchInput colors={this.state.pokemon.colors} input={this.state.input} setInput={this.setInput} formatPokename={this.formatPokename}/>}
      </div>
    )
  }
}

export default App;