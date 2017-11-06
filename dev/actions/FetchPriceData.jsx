import React from 'react';
import axios from 'axios';
import DummyData from '../DummyData.js';


export const FETCH_PRICE_DATA = 'FETCH_PRICE_DATA';

export function fetchPriceData(){
  //make API call to backend
  var fetchedData = DummyData;
  
  return {
    action: FETCH_PRICE_DATA,
    payload: fetchedData
  }
}

