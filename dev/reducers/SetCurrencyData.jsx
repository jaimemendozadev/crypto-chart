import React from 'react';
import {FETCH_CURRENCY_DATA, ERROR_FETCHING_DATA} from '../actions/FetchCurrencyData.jsx';

const fetchingDataError = "Sorry, there was an error fetching your request. Try again later.";


export default function SetCurrencyData(state = {}, action){
  switch(action.type){
    case FETCH_CURRENCY_DATA:
      return action.payload;
    
    case ERROR_FETCHING_DATA:
      return Object.assign({}, state, {error: true, errorMessage: fetchingDataError});
  }

  return state;
}


