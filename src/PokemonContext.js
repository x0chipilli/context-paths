import React, {useState, createContext} from 'react'

export const PokemonContext = createContext()

export const PokemonProvider = (props) => {
  const [pokemon, setPokemon] = useState()
  const [pokename, setPokename] = useState('ditto')
  const [input, setInput] = useState('')

  return (
    <PokemonContext.Provider value={[pokename, setPokename]}>
      {props.children}
    </PokemonContext.Provider>
  )
}