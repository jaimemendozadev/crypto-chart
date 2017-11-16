import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchCurrencyData} from '../actions/FetchCurrencyData.jsx';
import Chart from '../components/Chart.jsx';



class Main extends Component {

  displaySpinner(){
    return (
      <h2>Fetching Data...</h2>
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
    console.log("the props inside Main.js are ", this.props);
    
    const {CurrencyData} = this.props;
    
    return(
      <div className="body">
        <div className="header" />
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