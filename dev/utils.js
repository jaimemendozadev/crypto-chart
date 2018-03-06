import React from 'react';
import moment from 'moment';
import ChartFilter from './containers/ChartFilter.jsx';
const currYear = new Date().getFullYear();

const entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

function escapeHtml(string) {
  return String(string).replace(/[&<>"'`=\/]/g, function (s) {
    return entityMap[s];
  });
}


export function sanitizeYearInput(yearInput){
  var yearString = yearInput.trim();

  yearString = escapeHtml(yearString);
  
  var validYear = moment(yearString, "YYYY").isValid();

  return validYear == true ? yearString : {error: "Enter a Valid Year"};
}

export function displaySpinner(){
  return (
    <div className="spinner">
      <h2>Please wait while we fetch the data...</h2>
      <img src="/imgs/spinner.gif" />
    </div>
  )
}

export function displayErrorMessage(errorMessage){
  //in the event we get an error, send currYear as props to <ChartFilter />
  return (
    <div>
      <h2 className="dataError">{errorMessage}</h2>
      <ChartFilter CurrentYear={currYear} />
    </div>
  )
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