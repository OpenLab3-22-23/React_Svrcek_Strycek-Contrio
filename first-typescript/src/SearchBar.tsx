import { useEffect, useState } from "react"

export default function SearchBar({text, setText, onClick}: {text: string, setText: (text: string) => void, onClick : () => void}) {

    // useEffect(() => {
    //     // tu vytvoris novy listener na enter

    //     // return -> odstranis listener
    // },[])

    return (
        <div className="search-bar">
            <input className="search-input" type="text" placeholder="Search.." id="search" value={text} onChange={e=>{setText(e.target.value)}}/>
            <button className="search-button" id="btn" onClick={onClick}><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
    )
}