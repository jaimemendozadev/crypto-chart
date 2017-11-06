import React from 'react';
import {FETCH_PRICE_DATA} from '../actions/FetchPriceData.jsx';

export default function SetPriceData(state = [], action){
  switch(action.type){
    case FETCH_PRICE_DATA:
      return action.payload;
      
  }

  return state;
}


