import './PokeCard.css'

function PokeCard(props) {
  return (
    <div className="pokecard-container">
      <div className="card-bg"
        style={{backgroundColor: props.pokemon.colors.sec}}
      >
        <span className="card-id"
          style={{color: props.pokemon.colors.main}}
        >
          #{props.pokemon.id}
        </span>
        <img src={props.pokemon.artwork} alt=""/>
      </div>
      <h2 style={{color: props.pokemon.colors.text}}>
        {props.pokemon.name}
      </h2>
    </div>
  )
}

export default PokeCard