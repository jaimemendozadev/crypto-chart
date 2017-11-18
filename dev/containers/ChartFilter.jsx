import React, {Component} from 'react';
import {sanitizeMonthInput, sanitizeYearInput} from '../utils.js';


class ChartFilter extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      currentYear: this.props.CurrentYear,
      yearToFetch: 'Enter the year to get new data...',
      monthToFilter: 'Enter the month to filter the data...',
      error: null
    }
    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  
  handleYearChange(event){
    this.setState({
      yearToFetch: event.target.value
    })
  }

  handleMonthChange(event){

    this.setState({
      monthToFilter: event.target.value
    });
  }

  renderErrorMessage(){
    return (
      <div className="errorMessage">{this.state.error}</div>
    )
  }

  handleSubmit(event){
    event.preventDefault();

    var monthString = sanitizeMonthInput(this.state.monthToFilter);
    
    var yearString = sanitizeYearInput(this.state.yearToFetch);

    if (monthString["error"]){
      this.setState({
        error: monthString["error"]
      });
    }

    

    return(
      <div></div>
    )
  }

  render(){
    return(
      <div className="formContainer">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Enter the Month to Filter the Data</label>
            <input value={this.state.monthToFilter} onChange={this.handleMonthChange} />
          </div>
  
          <div style={{marginTop: "2em"}}>
            <label>Fetch Data For a New Calendar Year</label>
            <input value={this.state.yearToFetch} onChange={this.handleYearChange} />
          </div>
  
          
        <button type="submit">Submit</button>
        </form>
        { this.state.error ? this.renderErrorMessage() : ''}
      </div>
      
    )
  }
}

export default ChartFilter;