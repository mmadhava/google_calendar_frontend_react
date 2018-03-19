import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import { combineReducers, createStore } from 'redux';
import Calendar from './calender';
import styles from './calender.css';

const moment = extendMoment(Moment);
moment.locale('en')

class App extends React.Component { 

  state = {
    date: new Date()
  };

  updateDate = (action) => {
    switch (action.type) {
      case 'INCREMENT_WEEK':
        this.setState({date: moment(this.state.date).add(1, 'weeks')});
        break;
      case 'DECREMENT_WEEK':
        this.setState({date: moment(this.state.date).subtract(1, 'weeks')});
        break;
      case 'CHANGE_DATE':
        console.log('CHANGE_DATE', action)
        this.setState({date: action['date']});
        break;
      default:
      console.log('default')
        this.setState({date: this.state.date});
        break;
    }
  }

 render() {
   return (
    <Calendar 
      onMonthIncrement={() => this.updateDate({ type: 'INCREMENT_WEEK' })}
      onMonthDecrement={() => this.updateDate({ type: 'DECREMENT_WEEK' })}
      onDateChange={(e) => { this.updateDate({type: 'CHANGE_DATE', date: e.target.value}) }}
      {...this.state} 
    />
  )
  }
}

export default App;
