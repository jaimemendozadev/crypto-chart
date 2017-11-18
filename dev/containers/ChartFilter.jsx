import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchCurrencyData} from '../actions/FetchCurrencyData.jsx';
import {sanitizeYearInput, renderErrorMessage} from '../utils.js';

class ChartFilter extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      currentYear: this.props.CurrentYear,
      yearToFetch: 'Enter the year to get new data...',
      error: null
    }
    this.resetErrorMessage = this.resetErrorMessage.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrorMessage = renderErrorMessage.bind(this);

  }

  resetErrorMessage(){
    this.setState({
      error: null
    });
  }
  
  handleYearChange(event){
    this.setState({
      yearToFetch: event.target.value,
      error: null
    })
  }


  handleSubmit(event){
    event.preventDefault();
    
    var yearString = sanitizeYearInput(this.state.yearToFetch);

    if (yearString["error"]){
      this.setState({
        error: yearString["error"]
      });
    } else {
      //fetch new year of currency data
      this.props.fetchCurrencyData(yearString);      
    }

  }

  render(){
    return(
      <div className="formContainer">
        <div className="instructions">
          <h3>Instructions</h3>
          <p>Welcome to the Crypto Currency Chart app!</p>
          <p>You may use the handles on the slidebar below the chart 
            to get a granular or expanded view of the data for the current year.</p>
          <p>You may also use the form to submit a request for a different year of data and we'll happily
            get it for you to display on the chart.</p>
        </div>

        <form onSubmit={this.handleSubmit}>
  
          <div style={{marginTop: "1em"}}>
            <label>Fetch Data For a New Calendar Year</label>
            <input value={this.state.yearToFetch} onChange={this.handleYearChange} />
          </div>
  
        <button type="submit">Submit</button>
        { this.state.error ? this.renderErrorMessage() : ''}
        </form>
        
      </div>
      
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchCurrencyData}, dispatch);
}

export default connect(null, mapDispatchToProps)(ChartFilter);