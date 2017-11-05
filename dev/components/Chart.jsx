import React, {Component} from 'react';
import { LineChart, Line, XAxis, Tooltip } from 'recharts';
import DummyData from '../DummyData.js';
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
  render(){
    console.log("Our DummyData is ", DummyData)  
    return(
        <div>
          <h1 style={styles.header}>Crypto Currency Chart</h1>
          <Legend />
          <LineChart
            width={1200}
            height={800}
            style={styles.chart}
            data={DummyData}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <XAxis dataKey="Month" ticks={months} />
            <Tooltip content={renderTooltip} />
   
            <Line type="monotone" dataKey="price" stroke="#464678" />
          </LineChart>
        </div>
      
    )
  }
}

export default Chart;




