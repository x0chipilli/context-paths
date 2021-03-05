import {useEffect, useContext} from 'react'
import './App.css';
import themes from './themes.js'
import {PokemonContext} from './PokemonContext'
import PokeCard from './components/PokeCard'
import SearchInput from './components/SearchInput'

function App() {
  const {pokemon, setPokemon, pokename, setPokename} = useContext(PokemonContext)

  const getPokemonData = async () => {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`)
    let pokeData = await res.json()
    let res2 = await fetch(pokeData.species.url)
    let pokeSpeciesData = await res2.json()

    setPokemon({
      name: pokeData.name,
      id: pokeData.id,
      artwork: pokeData.sprites.other['official-artwork'].front_default,
      colors: themes[pokeSpeciesData.color.name]
    })
  }

  useEffect(() => {
    getPokemonData()

  }, [pokename])

  return(
    <div className="app"
        style={{backgroundColor: pokemon ? pokemon.colors.main : 'white'}}
    >
      {pokemon && <PokeCard/>}
      {pokemon && <SearchInput/>}
    </div>
  )
}

export default App;
