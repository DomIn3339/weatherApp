import { SET_WEATHER } from '../types';
import axios from 'axios';
import { getApiURL } from '../help/functions'

export function setWeather(data){
  return {
    type: SET_WEATHER,
    payload: data
  }
}

export function fetchWeather(ID){
    return dispatch => {
      const URL = getApiURL("ID", { id: ID })
      return axios.get(URL).then(res =>{
          dispatch(setWeather(res.data))
      });
  }
}

export function clearWeather(){
  return dispatch =>{
    return dispatch(setWeather({ }))
  }
}
