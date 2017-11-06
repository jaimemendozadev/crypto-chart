import React from 'react';
import axios from 'axios';

export const FETCH_PRICE_DATA = 'FETCH_PRICE_DATA';

export function fetchPriceData(){
  var fetchedData = axios //make api call to backend;
  
  return {
    action: FETCH_PRICE_DATA,
    payload: fetchedData
  }
}

