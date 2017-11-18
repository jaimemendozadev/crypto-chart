import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchCurrencyData} from '../actions/FetchCurrencyData.jsx';
import Chart from '../components/Chart.jsx';
import ChartFilter from './ChartFilter.jsx';
import {displaySpinner, displayErrorMessage} from '../utils.js';


class Main extends Component {

  displayChart(incomingData){
    if (!incomingData["sorted"]){
      return displaySpinner();
    }
    return (
      <div>
        <h2 className="chartHeader">Crypto Currency Data for {incomingData["Year"]}</h2>
        <Chart CurrencyData={incomingData["sorted"]} />
        <ChartFilter CurrentYear={incomingData["Year"]} />
      </div>
    )
  }

  componentDidMount(){
    var yearToFetch = new Date().getFullYear();   
    
    //Note remember to restore yearToFetch before deploying
    this.props.fetchCurrencyData(2016);
  }

  render(){
    console.log("the props inside Main are ", this.props)
    const {CurrencyData} = this.props;
    
    return(
      <div className="body">
        <div className="header"> 
          <h1>Crypto Currency Chart</h1>
          <h3>A simple chart for comparing the price of Bitcoin versus Ethereum per year</h3>
        </div>        
        { (CurrencyData.apiError == true || 
          CurrencyData.FEAxiosError == true ||
          CurrencyData.noDataError == true) ? 
          displayErrorMessage(CurrencyData.errorMessage) : this.displayChart(CurrencyData)}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchCurrencyData}, dispatch);
}

function mapStateToProps({CurrencyData}){
  return {
    CurrencyData
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);