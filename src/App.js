import {React, Component} from 'react';
import './App.css';
import {PokemonContext} from './PokemonContext'
import PokemonCard from './components/PokemonCard'
import SearchInput from './components/SearchInput'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app"
        style={{backgroundColor: this.context.pokemon ? this.context.pokemon.colors.main : 'white'}}
      >
        {this.context.pokemon && <PokemonCard/>}
        {this.context.pokemon && <SearchInput/>}
      </div>
    )
  }
}

App.contextType = PokemonContext
export default App;
