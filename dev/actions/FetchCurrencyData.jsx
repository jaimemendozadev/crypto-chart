import React from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/fetchcurrencydata/';

export const FETCH_CURRENCY_DATA = 'FETCH_CURRENCY_DATA';

export function fetchCurrencyData(fetchYear){
  const fetchedData = axios.get(`${BASE_URL}${fetchYear}`)
                      .then(response => response.data)
                      .catch(error => {
                        console.log("Error fetching API Data ", error);
                      });

  return {
    type: FETCH_CURRENCY_DATA,
    payload: fetchedData
  }
}

