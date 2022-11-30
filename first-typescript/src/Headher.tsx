import SearchBar from "./SearchBar"
import Slider from "./Slider"
import Switch from "./Slider"

export default function Headher() {
    return (
        <div className="headher-box">
            <h1 className="headher">Contrio</h1>
            <SearchBar />
            <Slider />
        </div>
    )
}