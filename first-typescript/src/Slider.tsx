import { useState } from "react"

export default function Slider({slider, setSlider}: {slider: boolean, setSlider: (slider: boolean) => void}) {

    return (
        <div className="slider-box">
          <div>
            <p id="city" className="slider-paragraph">Country</p>
          </div>
          <div className="slider-cell">
            <label className="switch">
              <input id="slider" type="checkbox" checked={slider} onClick={() => {setSlider(!slider)}}/>
              <span className="slider round"></span>
            </label>
          </div>
          <div>
            <p id="country" className="slider-paragraph">City</p>
          </div>
        </div>
    )
}