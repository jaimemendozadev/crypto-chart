import React from 'react';
import axios from 'axios';

export const FETCH_PRICE_DATA = 'FETCH_PRICE_DATA';

export function fetchPriceData(fetchYear){
  const fetchedData = axios.get(`http://localhost:3000/api/fetchpricedata/${fetchYear}`)
                      .then(response => response.data);

  return {
    type: FETCH_PRICE_DATA,
    payload: fetchedData
  }
}

