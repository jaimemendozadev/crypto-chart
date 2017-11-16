import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchCurrencyData} from '../actions/FetchCurrencyData.jsx';
import Chart from '../components/Chart.jsx';



class Main extends Component {

  componentDidMount(){
    var yearToFetch = new Date().getFullYear();    
    this.props.fetchCurrencyData(2016);
  }

  render(){
    console.log("the props inside Chart.jsx are ", this.props);
    
    const {CurrencyData} = this.props;
        
    if(!CurrencyData["sorted"]) {
      return <h2>Fetching Data...</h2>;
    }
    
    return(
      <div className="body">
        <div className="header" />
        <Chart CurrencyData={CurrencyData} />
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