import React, {Component} from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchPriceData} from '../actions/FetchPriceData.jsx';

import {renderTooltip} from '../utils.js';
import Legend from './Legend.jsx';
import FEData3 from '../FEData3.js';


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
  
  render(){
    console.log("FEData3 is ", FEData3)
    return(
      <div>
        <h1 style={styles.header}>Crypto Currency Chart</h1>
        
        <LineChart
          width={1200}
          height={700}

          style={styles.chart}
          data={FEData3} //PriceFeed
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <YAxis />

          <XAxis dataKey="Month" ticks={months} />
          <Tooltip content={renderTooltip} />

     

          <Line connectNulls={true} type="monotone" dataKey="ETH" stroke="#464678" />
          <Line connectNulls={true} type="monotone" dataKey="BTC" stroke="#ff7300" /> 
        </LineChart>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchPriceData}, dispatch);
}

function mapStateToProps({PriceFeed}){
  return {
    PriceFeed
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart);




