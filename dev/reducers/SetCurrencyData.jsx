import React from 'react';
import {FETCH_CURRENCY_DATA} from '../actions/FetchCurrencyData.jsx';

export default function SetCurrencyData(state = {}, action){
  switch(action.type){
    case FETCH_CURRENCY_DATA:
      console.log("the payload is ", action.payload)
      return action.payload;
  }

  return state;
}


