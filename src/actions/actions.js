import axios from 'axios';

import {ADD_CITY,
        REMOVE_CITY,
        SET_ACTIVE_CITY,
        SET_CITY_LIST} from '../types';

export function addCity(data){
  return {
    type: ADD_CITY,
    payload: data
  };
}

export function fetchWeatherByCityId(cityID  = 2172797) {
      const URL = "http://api.openweathermap.org/data/2.5/weather?id=" +
        cityID +
        "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric";
    return dispatch => {
      return axios.get(URL)
      .then(res => {
        console.log(res.data)
        dispatch(addCity(res.data))
      })
      .catch((err)=>{
        console.log("Can't get data from API.")
        return null; });
    }
}

export function fetchWeatherByCityName(cityName) {
      const URL = "http://api.openweathermap.org/data/2.5/weather?q=" +
        cityName +
        "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric";
    return dispatch => {
      return axios.get(URL)
      .then(res => {
        dispatch(addCity(res.data))
      })
      .catch((err)=>{
        console.log("Can't get data from API.")
        return null; });
    }
}

export function fetchWeatherByCityCoords(lat, lon) {
      const URL = "http://api.openweathermap.org/data/2.5/weather?lat=" +
        lat + "&lon=" + lon +
        "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric";
    return dispatch => {
      return axios.get(URL)
      .then(res => {
        dispatch(addCity({
          id: res.data.id,
          name: res.data.name,
          country: res.data.sys.country
        }))
      })
      .catch((err)=>{
        console.log("Can't get data from API.")
        return null; });
    }
}

export function removeCity(index){
  return {
    type: REMOVE_CITY,
    payload: index
  };
}

export function setActiveCity(index){
  return {
    type: SET_ACTIVE_CITY,
    payload: index
  };
}

export function fetchSelectedCity(index){
  return dispatch => { return dispatch(setActiveCity(index)); };
}

export function setCityList(data){
  return {
    type: SET_CITY_LIST,
    payload: data
  };
}
