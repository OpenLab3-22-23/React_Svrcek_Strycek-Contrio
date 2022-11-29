export default function SearchBar() {
    return (
        <div className="search-bar">
            <input className="search-input" type="text" placeholder="Search.." id="search"/>
          <button className="search-button" id="btn"><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
    )
}