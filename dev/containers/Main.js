import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchCurrencyData} from '../actions/FetchCurrencyData.jsx';
import Chart from '../components/Chart.jsx';


class Main extends Component {

  displaySpinner(){
    return (
      <div className="spinner">
        <h2>Please wait while we fetch the data...</h2>
        <img src="/imgs/spinner.gif" />
      </div>
    )
  }

  displayChart(incomingData){
    return (
      <Chart CurrencyData={incomingData} />
    )
  }

  componentDidMount(){
    var yearToFetch = new Date().getFullYear();    
    this.props.fetchCurrencyData(2016);
  }

  render(){
    
    const {CurrencyData} = this.props;
    
    return(
      <div className="body">
        <div className="header"> 
          <h1>Crypto Currency Chart</h1>
          <h3>A simple chart for comparing the price of Bitcoin versus Ethereum per year</h3>
        </div>
        {!CurrencyData["sorted"] ? this.displaySpinner() : this.displayChart(CurrencyData["sorted"])}
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