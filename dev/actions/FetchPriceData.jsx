import React from 'react';
import axios from 'axios';
import DummyData from '../DummyData.js';


export const FETCH_PRICE_DATA = 'FETCH_PRICE_DATA';

export function fetchPriceData(fetchYear){
  //make API call to backend
  //var fetchedData = DummyData;
  const fetchedData = axios.get(`http://localhost:3000/api/fetchpricedata/${fetchYear}`);
  
  return {
    type: FETCH_PRICE_DATA,
    payload: fetchedData
  }
}

