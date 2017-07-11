import axios from 'axios';
import { isInList, getApiURL } from '../help/functions';
import {ADD_CITY,
        REMOVE_CITY,
        SET_ACTIVE_CITY} from '../types';

export function addCity(data){
  return {
    type: ADD_CITY,
    payload: data
  };
}

export function addCityToList(queryType = 'name', data){
  let URL = getApiURL(queryType, data)

  return (dispatch, getState) => {
    return axios.get(URL)
    .then(res => {
      if(!isInList(res.data.id, getState().cityReducer.cities)){
      dispatch(addCity({
        id: res.data.id,
        name: res.data.name,
        country: res.data.sys.country,
        coord: res.data.coord
      }))
      return "added";
    }
      else{
        return "alreadyInList";
      }
    })
    .catch((error)=>{
      return "notFound";
    });
  }
}

export function removeCity(index){
  return {
    type: REMOVE_CITY,
    payload: index
  };
}

export function removeCityFromList(index){
  return dispatch => {
    return dispatch(removeCity(index));
  }
}

export function setActiveCity(index){
  return {
    type: SET_ACTIVE_CITY,
    payload: index
  };
}

export function fetchSelectedCity(index){
  return dispatch => {
    return dispatch(setActiveCity(index));
  };
}
