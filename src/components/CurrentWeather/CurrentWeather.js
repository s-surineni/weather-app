export default function CurrentWeather() {
    return (
        <div className="weather">
            <div className="top">
                <p className="city">Nizamabad</p>
                <p className="weather-description">Cloudy</p>
            </div>
            <img alt="weather" className="weather-icon" src="http://openweathermap.org/img/wn/04n.png" />
        </div>
    )
}