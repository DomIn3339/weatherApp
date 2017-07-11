import { SET_WEATHER } from '../types';

const initialState = {
  weatherData: {}
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
      case SET_WEATHER:
          return {
            ...state,
            weatherData: action.payload
          };
      default:
          return state;
    }
};
