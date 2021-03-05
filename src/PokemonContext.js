import React, {useState, createContext} from 'react'

export const PokemonContext = createContext()

export const PokemonProvider = (props) => {
  const [pokemon, setPokemon] = useState()
  const [pokename, setPokename] = useState('pichu')
  const [input, setInput] = useState('')

  return (
    <PokemonContext.Provider value={{pokemon, setPokemon, pokename, setPokename, input, setInput}}>
      {props.children}
    </PokemonContext.Provider>
  )
}