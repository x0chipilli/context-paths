import React, { Component, createContext } from 'react'
import themes from './themes'

export const PokemonContext = createContext();

export class PokemonProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemon: undefined,
      pokename: 'ditto',
      input: ''
    }
  }

  getPokemonData = async () => {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.pokename}`)
    let pokeData = await res.json()
    let res2 = await fetch(pokeData.species.url)
    let pokeSpeciesData = await res2.json()

    this.setPokemon({
      name: pokeData.name,
      id: pokeData.id,
      artwork: pokeData.sprites.other['official-artwork'].front_default,
      colors: themes[pokeSpeciesData.color.name]
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

  setPokemon = (val) => this.setState({
    pokemon: val
  })

  setPokename = (val) => this.setState({
    pokename: val
  })

  setInput = (val) => this.setState({
    input: val
  })

  render() {
    return(
      <PokemonContext.Provider
        value={{
          pokemon: this.state.pokemon,
          pokename: this.state.pokename,
          input: this.state.input,
          setPokemon: this.setPokemon,
          setPokename: this.setPokename,
          setInput: this.setInput
        }}
      >
        {this.props.children}
      </PokemonContext.Provider>
    )
  }
}