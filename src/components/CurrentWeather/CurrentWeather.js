import "./CurrentWeather.css";
export default function CurrentWeather() {
    return (
        <div className="weather">
            <div className="top">
                <p className="city">Nizamabad</p>
                <p className="weather-description">Cloudy</p>
            </div>
            <img alt="weather" className="weather-icon" src="icons/01d.png" />
            <div className="bottom">
                <p className="temperature">31°C</p>
                <div className="details">
                    <p className="parameter-row">
                        <span className="parameter-label">Details</span>
                    </p>
                    <p className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value">30°C</span>
                    </p>
                    <p className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">11 km/h</span>
                    </p>
                    <p className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">60%</span>
                    </p>
                </div>
            </div>
        </div>
    )
}