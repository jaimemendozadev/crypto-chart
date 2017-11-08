import React from 'react';
import {FETCH_PRICE_DATA} from '../actions/FetchPriceData.jsx';

export default function SetPriceData(state = [], action){
  switch(action.type){
    case FETCH_PRICE_DATA:
      console.log("the payload is ", action.payload)
      return action.payload;
  }

  return state;
}


