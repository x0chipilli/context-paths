import './SearchInput.css'

function SearchInput() {
  return(
    <div className="search-input-container">
      <input 
        style={{backgroundColor: props.colors.sec}}
        type="text" 
        placeholder="Search a pokemon"
        onChange={(e) => props.setInput(e.target.value)}
      />
      <button
        style={{backgroundColor: props.colors.sec}}
        onClick={() => props.formatPokename(props.input)}
      >🔍</button>
    </div>
  )
}

export default SearchInput