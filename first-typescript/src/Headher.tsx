import SearchBar from "./SearchBar"
import Slider from "./Slider"

export default function Headher({text, setText, slider, setSlider, onClick}: {text: string, setText: (text: string) => void, slider: boolean, setSlider: (slider: boolean) => void, onClick : () => void}) {
    return (
        <div className="headher-box">
            <h1 className="headher">Contrio</h1>
            <SearchBar onClick={onClick} text={text} setText={setText}/>
            <Slider slider={slider} setSlider={setSlider}/>
        </div>
    )
}