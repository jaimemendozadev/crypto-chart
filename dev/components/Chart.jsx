import React, {Component} from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Brush } from 'recharts';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchCurrencyData} from '../actions/FetchCurrencyData.jsx';

import {renderTooltip} from '../utils.js';
import Legend from './Legend.jsx';


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


const styles = {
    chart: {
      margin: "0 auto"
    },
    header: {
      textAlign: "center"
    }
  }

class Chart extends Component {
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
      <div>
        <h1 style={styles.header}>Crypto Currency Chart</h1>
        
        <LineChart
          width={1200}
          height={700}

          style={styles.chart}
          data={CurrencyData["sorted"]} //CurrencyData
          margin={{ top: 20, right: 20, left: 10, bottom: 5 }}
        >
          <YAxis />

          <XAxis dataKey="Month" ticks={months} />
          <Tooltip content={renderTooltip} />

     

          <Line connectNulls={true} type="monotone" dataKey="ETH" stroke="#464678" />
          <Line connectNulls={true} type="monotone" dataKey="BTC" stroke="#ff7300" /> 
          <Brush />
        </LineChart>
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

export default connect(mapStateToProps, mapDispatchToProps)(Chart);




