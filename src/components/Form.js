import React, { Component } from "react";
import EmailPwForm from "./EmailPwForm";

const initialState = {
  firstname: "",
  firstnameError: "",
  lastname: "",
  lastnameError: "",
  genderValue: "",
  email: "",
  emailError: "",
  password: "",
  passwordError: ""
};

class Form extends Component {
  state = initialState;

  validate = () => {
    //to validate
  };

  submited = event => {
    event.preventDefault();
    //VALIDATE()
  };

  changed = event => {
    if (event.target.type === "radio") {
      this.setState({ [event.target.name]: event.target.value });
    } else {
      this.setState({ [event.target.id]: event.target.value });
    }
  };

  render() {
    return (
      <div>
        <h1>Welcome to this cruel world,{this.state.firstname}!</h1>
        <h4>please, wear your seabelts...</h4>
        <form>
          <div>
            <label>First Name</label>
            <input
              id="firstname"
              onChange={this.changed}
              type="text"
              placeholder="Type your name"
            />
          </div>
          <div>
            <label>Last name</label>
            <input
              id="lastname"
              onChange={this.changed}
              type="text"
              placeholder="Type your surname"
            />
          </div>
          <label>Gender</label>

          <input
            id="maleGender"
            onChange={this.changed}
            type="radio"
            name="genderValue"
            value="male"
          />
          <label htmlFor="maleGender">Male</label>
          <input
            id="femaleGender"
            onChange={this.changed}
            type="radio"
            name="genderValue"
            value="female"
          />
          <label htmlFor="femaleGender">Female</label>
          <input
            id="privateGender"
            onChange={this.changed}
            type="radio"
            name="genderValue"
            value="private"
          />
          <label htmlFor="privateGender">It's private!</label>

          <EmailPwForm />
        </form>
        <p>{this.state.genderValue}</p>
      </div>
    );
  }
}

export default Form;
