import React, {Component} from 'react';
import { LineChart, Line, XAxis, Tooltip } from 'recharts';
import DummyData from '../DummyData.js';

class Chart extends Component {
  render(){
    return(
        <LineChart
          width={1400}
          height={800}
          data={DummyData}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <XAxis dataKey="date" />
          <Tooltip />
 
          <Line type="monotone" dataKey="price" stroke="#ff7300" />
        </LineChart>
      
    )
  }
}

export default Chart;

