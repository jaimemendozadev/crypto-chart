import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Brush } from 'recharts';
import {renderTooltip} from '../utils.js';
import Legend from '../containers/Legend.jsx';


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const Chart = ({CurrencyData}) => {
  console.log("CurrencyData is ", CurrencyData);
  return(
    
    <div className="chart">
      <h1>Crypto Currency Chart</h1>
      
      <LineChart
        width={1200}
        height={700}
        data={CurrencyData}
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

export default Chart;




