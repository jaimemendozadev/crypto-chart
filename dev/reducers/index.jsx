import React from 'react';
import combineReducers from 'redux';
import SetPriceData from './SetPriceData.jsx';

const RootReducer = combineReducers({
  PriceFeed: SetPriceData
});

export default RootReducer;