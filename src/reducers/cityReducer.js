import { ADD_CITY,
         REMOVE_CITY,
         SET_ACTIVE_CITY} from '../types';

const initialState = {
  cities: [],
  activeCity: 0
};

export default (state = initialState, action = {})=>{
  switch (action.type) {
    case ADD_CITY:
      return {
        ...state,
          cities: [...state.cities, action.payload]
      };
    case REMOVE_CITY:
      return {
        ...state,
          //cities: [...state.cities.slice(0, action.payload),
          //         ...state.cities.slice(action.payload + 1)]
          cities: state.cities.filter(({  id }) => ("" + id) !== action.payload)

      };
    case SET_ACTIVE_CITY:
      return {
        ...state,
        activeCity: action.payload
      };

    default:
      return state;
  }
};
