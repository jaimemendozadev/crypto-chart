import React from 'react';
import moment from 'moment';


export const months = {
  "january": 1,
  "february": 2,
  "march": 3,
  "april": 4,
  "may": 5,
  "june": 6,
  "july": 7,
  "august": 8,
  "september": 9,
  "october": 10,
  "november": 11,
  "december": 12,
}

export function sanitizeMonthInput(monthInput){
  var monthString = monthInput.trim().toLowerCase();

  return !months[monthString] ? {error: "Enter a Valid Month"} : monthString;
}

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