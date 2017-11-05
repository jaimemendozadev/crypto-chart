import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Chart from './components/Chart.jsx';

class App extends Component {
  render(){
    return (
      <div>
        <Chart />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));