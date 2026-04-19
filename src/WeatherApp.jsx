import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 27,
    temp: 25.05,
    temp_min: 20,
    temp_max: 30,
    humidity: 60,
    waether: "Cloudy",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (

        <div style={{textAlign:"center"}}>
            <h2>Weather app by delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo} />
        </div>
    );
}