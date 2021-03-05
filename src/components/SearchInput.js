import './SearchInput.css'

export default function SearchInput(props) {
  return (
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