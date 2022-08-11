import React, { Component } from 'react'
import PersonalDetails from './PersonalDetails'
import Confirmation from './Confirmation'
import Success from './Success'
import Booking from './Booking'

export default class Signup extends Component {

  state = {
    step: 1,
    email: '',
    username: '', 
    password: '',
    firstName: '',
    lastName: '',
    country: '',
    levelOfEducation: '',
  }

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }

  render() {
    const { step } = this.state;
    const { firstName, lastName, country, message } = this.state;
    const values = { firstName, lastName, country, message }
    
    switch(step) {
      case 1: 
        return (
          <Booking
          handleChange={ this.handleChange }
            nextStep={ this.nextStep }
            values={ values }
          />
        )
      case 2: 
        return (
          <PersonalDetails 
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ values }
          />
        )
      case 3: 
          return (
            <Confirmation 
              prevStep={ this.prevStep }
              nextStep={ this.nextStep }
              values={ values }
            />
          )
        case 4: 
          return (
            <Success />
          )
      default: 
          // do nothing
    }
  }
}