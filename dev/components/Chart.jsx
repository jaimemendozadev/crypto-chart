import React, {Component} from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchPriceData} from '../actions/FetchPriceData.jsx';

import {renderTooltip} from '../utils.js';
import Legend from './Legend.jsx';
import FEData2 from '../FEData2.js';



const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const currencies = [
  {key: "ETH", stroke: "#464678"},
  {key: "BTC", stroke: "#ff7300"}
]

const styles = {
    chart: {
      margin: "0 auto"
    },
    header: {
      textAlign: "center"
    }
  }

class Chart extends Component {
  
  /*
  componentDidMount(){
    var yearToFetch = new Date().getFullYear();
    this.props.fetchPriceData(yearToFetch);
  }
  */
  
  render(){
    console.log("FEData2 is ", FEData2)
    /*
    const {PriceFeed} = this.props;

    if(PriceFeed.length < 1) {
      return <h2>Fetching Data...</h2>;
    }
    */
    return(
      <div>
        <h1 style={styles.header}>Crypto Currency Chart</h1>
        
        <LineChart
          width={1200}
          height={700}

          style={styles.chart}
          data={FEData2} //PriceFeed
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <YAxis />

          <XAxis interval={0} minTickGap={50} allowDataOverflow={false} dataKey="Month" ticks={months} />
          <Tooltip content={renderTooltip} />

          {currencies.map(currency => {
            return <Line type="monotone" key={currency.key} dataKey={currency.key} stroke={currency.stroke} />
          })}
  
          {/* <Line type="monotone" dataKey="ETH" stroke="#464678" />
          <Line type="monotone" dataKey="BTC" stroke="#ff7300" /> */}
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




