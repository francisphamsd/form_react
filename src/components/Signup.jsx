import React, { Component } from "react";

export default class Signup extends Component {
  // Default state
  state = {
    step: 1,
    name: "",
    email: "",
    phone: "",
  };

  // Go back to previous step
  prevStep = () => {
    const { step } = this.state;

    this.setState({ step: step - 1 });
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  // Handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    return <div>Signup</div>;
  }
}
