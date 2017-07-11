import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherInfo extends Component{

   render() {
     const weatherData = this.props.data.weatherData;
     
     if (!weatherData.weather){
       return <center><h3>Select a city from the list</h3></center>;
     }

     const weather = weatherData.weather[0];
     const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
     return (
       <div>
         <h1>
           {weather.main} in { weatherData.name }
           <img src={iconUrl} alt={ weatherData.description } />
         </h1>
          <p>Current: { weatherData.main.temp }°C</p>
          <p>Max: { weatherData.main.temp_max }°C</p>
          <p>Min: { weatherData.main.temp_min }°C</p>
          <p>Humidity: { weatherData.main.humidity }%</p>
          <p>Pressure: { weatherData.main.pressure} hPa</p>
         <p>Wind Speed: {weatherData.wind.speed} km/hr</p>
       </div>
     );
   }
}

function mapStateToProps(state){
  return{
    data: state.weatherReducer
  }
}

export default connect(mapStateToProps, { })(WeatherInfo)
