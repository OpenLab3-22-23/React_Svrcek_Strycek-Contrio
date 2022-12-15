import { useEffect } from "react"

export default function SearchBar({onClick}: {onClick : () => void}) {

    // useEffect(() => {
    //     // tu vytvoris novy listener na enter

    //     // return -> odstranis listener
    // },[])

    return (
        <div className="search-bar">
            <input className="search-input" type="text" placeholder="Search.." id="search"/>
            <button className="search-button" id="btn" onClick={onClick}><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
    )
}