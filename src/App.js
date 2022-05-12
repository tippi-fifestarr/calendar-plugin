import React, { Component } from 'react';
import './App.css';
import DatePicker from 'react-datepicker';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
// import { useForm } from 'react-hook-form';

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      selectDate: new Date()
    };
    this.onDateChange = this.onDateChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectDate: date
    })
  }

  onSubmitForm(event) {
    event.preventDefault();
    alert(this.state.selectDate)
  }
 
  

  render() {
    return (
      <div className="calendarApp mt-5">
        <h1>Bro Update:</h1>
        <p>Choose a time and place for your next Progress Update, Do It Live, or ________!</p>
        <form onSubmit={ this.onSubmitForm }>
            <div className="input-group mb-3">
              <button className="btn btn-outline-primary" id="button-addon2">Show Date/Time</button>
              <input type="url" className="form-control" placeholder="Enter URL for meeting" />
              <div className='dater'>
                <br />
              <label htmlFor="selectDate">Click to Choose Date
                <DatePicker
                      className="form-control"
                      selected={ this.state.selectDate }
                      onChange={ this.onDateChange }
                      name="selectDate"
                      showTimeSelect
                      timeIntervals={30}
                      timeFormat="HH:mm"
                      timeCaption="time"
                      dateFormat="MMMM d, yyyy h:mm aa"
                  />
                </label>
              </div>
            </div>
        </form>
      </div>
    );
  }
  
}

export default App;