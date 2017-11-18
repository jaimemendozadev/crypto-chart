import React from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/fetchcurrencydata/';

export const FETCH_CURRENCY_DATA = 'FETCH_CURRENCY_DATA';
export const API_ERROR = 'API_ERROR';
export const FE_AXIOS_ERROR = 'FE_AXIOS_ERROR';
export const NO_DATA_FROM_API = 'NO_DATA_FROM_API';

const axiosErrorMessage = "Sorry, there was an error fetching your request. Please submit another request or try again later.";
const axiosErrorPayload = {FEAxiosError: true, errorMessage: axiosErrorMessage};

export function fetchCurrencyData(fetchYear){

  return function(dispatch){
    axios.get(`${BASE_URL}${fetchYear}`)
      .then(response => {

        console.log("the response from the server is ", response);

        if (response.data.noDataError == true){
          dispatch({type: NO_DATA_FROM_API, payload: response.data})
        }

        if (response.data.apiError == true){
          dispatch({type: API_ERROR, payload: response.data});
        }
        
        dispatch({type: FETCH_CURRENCY_DATA, payload: response.data});
      
      })
      .catch(error => {
        console.log("Error fetching API Data ", error);
        
        dispatch({type: FE_AXIOS_ERROR, payload: axiosErrorPayload});
      });
      
      
  }
}

