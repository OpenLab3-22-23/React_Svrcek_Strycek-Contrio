export default function Switch() {
    return (
        <div>
             <div>
            <p id="city" className="slider-paragraph"></p>
          </div>
          <div className="slider-cell">
            <label className="switch">
              <input id="slider" type="checkbox" value="yes" />
              <span className="slider round"></span>
            </label>
          </div>
          <div>
            <p id="country" className="slider-paragraph"></p>
          </div>
        </div>
    )
}