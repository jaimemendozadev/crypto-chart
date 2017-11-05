import React from 'react';
import moment from 'moment';


export function newCurrencyData(year){
  var currencyData = {};

  currencyData[year] = {
    1:{},
    2:{},
    3:{},
    4:{},
    5:{},
    6:{},
    7:{},
    8:{},
    9:{},
    10:{},
    11:{},
    12:{},
  }
  

  return currencyData;

};

export function renderTooltip(data){
  if(!data.payload[0]){
    return <div></div>
  }
  
  const load = data.payload[0];
  const boxStyle = {
    width: "100%",
    height: "40%",
    padding: ".5em",
    border: "1px solid black",
    backgroundColor: "white"
  }
  
  return(  
    <div style={boxStyle}>
      {!data ? console.log("got nothing") : console.log("data  inside renderTooltip are ", data)}
      <p>Price (USD): ${load.payload.price}<br />
      Date: {load.payload.date}</p>
    </div>
  )
  
}