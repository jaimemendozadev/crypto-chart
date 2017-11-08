import React from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/fetchpricedata/';

export const FETCH_PRICE_DATA = 'FETCH_PRICE_DATA';

export function fetchPriceData(fetchYear){
  const fetchedData = axios.get(`${BASE_URL}${fetchYear}`)
                      .then(response => response.data);

  return {
    type: FETCH_PRICE_DATA,
    payload: fetchedData
  }
}

