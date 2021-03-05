import {useState, useEffect, useContext} from 'react'
import './App.css';
import themes from './themes.js'
import {PokemonContext} from './PokemonContext'
import PokeCard from './components/PokeCard'

function App() {
  return(
    <div className="app"
        style={{backgroundColor: 'white'}}
    >

      {/* {this.state.pokemon && <PokeCard pokemon={this.state.pokemon}/>} */}

      {/* {this.state.pokemon && <SearchInput colors={this.state.pokemon.colors} input={this.state.input} setInput={this.setInput} formatPokename={this.formatPokename}/>} */}
    </div>
  )
}

export default App;
