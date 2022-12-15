import SearchBar from "./SearchBar"
import Slider from "./Slider"

export default function Headher({slider, setSlider, onClick}: {slider: boolean, setSlider: (slider: boolean) => void, onClick : () => void}) {
    return (
        <div className="headher-box">
            <h1 className="headher">Contrio</h1>
            <SearchBar onClick={onClick}/>
            <Slider slider={slider} setSlider={setSlider}/>
        </div>
    )
}