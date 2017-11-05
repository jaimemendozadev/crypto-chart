import React, {Component} from 'react';
import { LineChart, Line, XAxis, Tooltip } from 'recharts';
import DummyData from '../DummyData.js';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const styles = {
    chart: {
      margin: "0 auto"
    }
  }

class Chart extends Component {
  
  render(){
    console.log("Our DummyData is ", DummyData)  
    return(
        <LineChart
          width={1200}
          height={800}
          style={styles.chart}
          data={DummyData}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <XAxis dataKey="Month" ticks={months} />
          <Tooltip />
 
          <Line type="monotone" dataKey="price" stroke="#ff7300" />
        </LineChart>
      
    )
  }
}

export default Chart;

