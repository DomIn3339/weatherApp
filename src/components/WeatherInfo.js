import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherInfo extends Component{
  render() {
    const weatherData = this.props.data.cities[this.props.data.activeCity];
    if(typeof(weatherData) === 'undefined'){
      return null;
    }

    const weather = weatherData.weather[0];
    const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
    return (
      <div>
        <h1>
          {weather.main} in {weatherData.name}
          <img src={iconUrl} alt={weatherData.description} />
        </h1>
        <p>Current: {weatherData.main.temp}°</p>
        <p>High: {weatherData.main.temp_max}°</p>
        <p>Low: {weatherData.main.temp_min}°</p>
        <p>Wind Speed: {weatherData.wind.speed} km/hr</p>
      </div>
  );
}
}

function mapStateToProps(state){
  return{
    data: state.cityReducer
  }
}

export default connect(mapStateToProps, { })(WeatherInfo)