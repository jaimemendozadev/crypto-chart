import React, {Component} from 'react';

class ChartFilter extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      currentYear: '',
      yearToFetch: 'Enter the year to get new data...',
      monthToFilter: 'Enter the month to filter the data...'
    }

    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleYearChange(event){
    console.log("event is ", event.target.value);

    this.setState({
      yearToFetch: event.target.value
    })
  }

  handleMonthChange(event){
    console.log("event is ", event.target.value);

    this.setState({
      monthToFilter: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    return(
      <div></div>
    )
  }

  render(){
    return(
      <form className="formContainer" onSubmit={this.handleSubmit}>
        <div>
          <label>Enter the Month to Filter the Data</label>
          <input value={this.state.monthToFilter} onChange={this.handleMonthChange} />
        </div>

        <div style={{marginTop: "2em"}}>
          <label>Fetch Data For a New Calendar Year:</label>
          <input value={this.state.yearToFetch} onChange={this.handleYearChange} />
        </div>

        

      </form>
      
    )
  }
}

export default ChartFilter;