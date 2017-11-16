import React, {Component} from 'react';

class Legend extends Component {
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
        <label>Year to Fetch Data:</label>
        <input value={this.state.yearToFetch} onChange={this.handleYearChange} />

        <div style={{marginTop: "1em"}}>
          <label>Enter the Month to Filter the Data</label>
          <input value={this.state.monthToFilter} onChange={this.handleMonthChange} />
        </div>

      </form>
      
    )
  }
}

export default Legend;