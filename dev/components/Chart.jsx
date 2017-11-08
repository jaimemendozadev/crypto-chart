import React, {Component} from 'react';
import { LineChart, Line, XAxis, Tooltip } from 'recharts';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchPriceData} from '../actions/FetchPriceData.jsx';

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
    this.props.fetchPriceData(yearToFetch);
  }
  
  render(){
    const {PriceFeed} = this.props;

    if(PriceFeed.length < 1) {
      return <h2>Fetching Data...</h2>;
    }
    return(
      <div>
        {console.log("the PriceFeed is ", PriceFeed)}
        <h1 style={styles.header}>Crypto Currency Chart</h1>
        <Legend />
        <LineChart
          width={1200}
          height={800}
          style={styles.chart}
          data={PriceFeed} 
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <XAxis dataKey="Month" ticks={months} />
          <Tooltip content={renderTooltip} />
  
          <Line type="monotone" dataKey="ETH" stroke="#464678" />
          <Line type="monotone" dataKey="BTC" stroke="#ff7300" />
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




