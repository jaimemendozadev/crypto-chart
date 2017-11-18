import React from 'react';
import moment from 'moment';


export function sanitizeYearInput(yearInput){
  var yearString = yearInput.trim();
  var validYear = moment(yearString, "YYYY").isValid();

  return validYear == true ? yearString : {error: "Enter a Valid Year"};
}


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


export function renderErrorMessage(){
  return (
    <div className="errorMessage">{this.state.error}</div>
  )
}