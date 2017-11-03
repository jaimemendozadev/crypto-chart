import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import StockChart from './components/StockChart.jsx';
class App extends Component {
  render(){
    return (
      <div>
        <h1>Crypto Currency Chart</h1>
        <StockChart />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));