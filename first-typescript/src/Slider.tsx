export default function Slider() {
    return (
        <div className="slider-box">
          <div>
            <p id="city" className="slider-paragraph">Country</p>
          </div>
          <div className="slider-cell">
            <label className="switch">
              <input id="slider" type="checkbox" value="yes" />
              <span className="slider round"></span>
            </label>
          </div>
          <div>
            <p id="country" className="slider-paragraph">City</p>
          </div>
        </div>
    )
}