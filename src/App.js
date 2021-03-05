import {useState, useEffect} from 'react'
import './App.css';
import themes from './themes.js'
import PokeCard from './components/PokeCard'
import SearchInput from './components/SearchInput'

function App() {
  const [pokemon, setPokemon] = useState()
  const [pokename, setPokename] = useState('ditto')
  const [input, setInput] = useState("")

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

  const formatPokename = (name) => {
    let pokemonName = name.toLowerCase()
    
    if (pokemonName.indexOf(' ') >= 0) {
      pokemonName = pokemonName.split(' ').join('-')
    }

    setPokename(pokemonName)
  }

  useEffect(() => {
    getPokemonData()
  }, [pokename])

  return(
    <div className="app"
      style={{backgroundColor: pokemon ? pokemon.colors.main : 'white'}}
    >
      {pokemon && <PokeCard pokemon={pokemon}/>}
      {pokemon && <SearchInput colors={pokemon.colors} input={input} setInput={setInput} formatPokename={formatPokename}/>}
    </div>
  )
}

export default App;
