import React, {Component} from 'react';

const style = {
  formContainer: {
    width: "400px",
    height: "200px",
    margin: "0 auto",
    padding: "1em"
  },

  formControl: {
    display: "block",
    width: "80%",
    height: "30px",
    padding: "6px 12px",
    fontSize: "14px",
    lineHeight: 1.42857143,
    color: "#555",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "4px",
    margin: 0
  }
}


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
      yearToFetch: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    console.log("yaaaay");
    return(
      <div></div>
    )
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} style={style.formContainer}>
        <label>Year to Fetch Data:</label>
        <input style={style.formControl} value={this.state.yearToFetch} onChange={this.handleInputChange} />

        <div style={{marginTop: "1em"}}>
          <label>Enter the Month to Filter the Data</label>
          <input style={style.formControl} value={this.state.yearToFetch} onChange=  {this.handleMonthChange} />
        </div>

      </form>
      
    )
  }
}

export default Legend;