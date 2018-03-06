import React from 'react';
import {FETCH_CURRENCY_DATA, API_ERROR, FE_AXIOS_ERROR, NO_DATA_FROM_API} from '../actions/FetchCurrencyData.jsx';




export default function SetCurrencyData(state = {}, action){
  switch(action.type){
    case FETCH_CURRENCY_DATA:
      return action.payload;
    
    case NO_DATA_FROM_API:
      return Object.assign({}, state, action.payload);
    
    case API_ERROR:
      return Object.assign({}, state, action.payload);
    
    case FE_AXIOS_ERROR:
      return action.payload;
  }

  return state;
}


