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
  console.log("the data is ", data)
  
  if(!data.payload[0]){
    return <div></div>
  }
  
  const load = data.payload[0];
  const boxStyle = {
    width: "100%",
    height: "40%",
    padding: "1em",
    border: "1px solid black",
    backgroundColor: "white"
  }
  
  return(  
    
    <div style={boxStyle}>
      <p>
        Clsoing price of {load.name}:<br /> 
        ${load.value} (USD)<br />
        Date: {load.payload.date}
      </p>
    </div>
  )
  
}