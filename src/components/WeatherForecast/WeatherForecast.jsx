import './WeatherForecast.css';

const WeatherForecastList = ({weather}) =>{

return(
<div className="weather">
  <h2>{weather.day} of the Week</h2>
  <img src={weather.img} alt={weather.imgAlt} />
  <p><span>{weather.conditions}: </span>current weather conditions</p>
  <p><span>{weather.time}: </span>time of day</p>
</div>
)

}

export default WeatherForecastList;