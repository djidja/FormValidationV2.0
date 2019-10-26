import React, { Component } from "react";
import EmailPwForm from "./EmailPwForm";
import { lengthOfField } from "./FormValidation/LengthOfField";
import {
  firstUpperCase,
  deleteAllWhitespaces,
  alphabetOnly
} from "./FormValidation/ValidationOfField";

const initialState = {
  firstName: "",
  firstNameError: "",
  lastName: "",
  lastNameError: "",
  genderValue: "",
  email: "",
  emailError: "",
  password: "",
  passwordError: "",
  formStatusMsg: {
    fontSize: 14,
    color: "",
    text: ""
  },
  errorMsg: {
    fontSize: 10,
    color: "red",
    text: ""
  }
};

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  validate = () => {
    //to validate

    let firstNameError = "";
    let lastNameError = "";
    let emailError = "";
    let passwordError = "";

    if (this.state.firstName.length < 2 || this.state.firstName.length > 30) {
      firstNameError = "Name has to have between 2 and 30 characters";
    } else {
      firstNameError = "valid name";
    }
  };

  //experimental function, should pick up object and decompose it from child component
  //and update current state here
  getEmailPwInput = (email, password, emailError, passwordError) => {
    this.setState({ email, password, emailError, passwordError });
  };

  submited = async event => {
    event.preventDefault();

    let firstNameError = "";

    //assigning name from state to temporary variable
    let firstName = this.state.firstName;

    //minimum lenght to check for fields
    let lengthMin = 3;
    //maximum lenght to check for fields
    let lengthMax = 30;

    //is length true/false
    let resLengthOfField = lengthOfField(
      this.state.firstName,
      lengthMin,
      lengthMax
    );

    //is alphabetic
    let resIsAlphabetic = alphabetOnly(firstName);

    //deleting all white spaces
    firstName = deleteAllWhitespaces(firstName);

    //under deleteAllWhitespaces function so it doesnt throw alphabet error on spaces
    if (!resIsAlphabetic) {
      firstNameError = "Characters must be from english alphabet";
    } else if (!resLengthOfField) {
      firstNameError = `Name has to have between ${lengthMin} and ${lengthMax} characters`;
    }

    //make it contain only 1st letter uppercase
    firstName = firstUpperCase(firstName);

    // returns true or false
    // alphabetOnly(firstName)

    await this.setState({ firstName, firstNameError });

    //TO GO TO LASTNAME

    //VALIDATE()
  };

  changed = async event => {
    var firstNameError = "";

    if (event.target.type === "radio") {
      await this.setState({ [event.target.name]: event.target.value });
    } else {
      await this.setState({ [event.target.id]: event.target.value });
    }

    //error, cant 2 times setState, pack it in function

    // if (event.target.id === "firstName") {
    //   event.target.value = deleteAllWhitespaces(event.target.value);
    //   if (!alphabetOnly(event.target.value)) {
    //     firstNameError = "Characters must be from english alphabet";
    //     this.setState({ firstNameError });
    //   } else {
    //     firstNameError = "";
    //   }
    //   event.target.value = firstUpperCase(event.target.value);
    //   await this.setState({ firstNameError });
    // }
  };

  render() {
    return (
      <div>
        <h1>Welcome to this cruel world {this.state.firstName}!</h1>
        <h4>please, wear your seabelts...</h4>
        <form onSubmit={this.submited}>
          <div>
            <label>First Name</label>
            <input
              id="firstName"
              onChange={this.changed}
              type="text"
              value={this.state.firstName}
              placeholder="Type your name"
            />
            <p
              style={{
                color: this.state.errorMsg.color,
                fontSize: this.state.fontSize
              }}
            >
              {this.state.firstNameError}
            </p>
          </div>
          <div>
            <label>Last name</label>
            <input
              id="lastName"
              onChange={this.changed}
              type="text"
              value={this.state.lastName}
              placeholder="Type your surname"
            />
            <p
              style={{
                color: this.state.errorMsg.color,
                fontSize: this.state.fontSize
              }}
            >
              {this.state.lastNameError}
            </p>
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
            checked
          />
          <label htmlFor="privateGender">It's private!</label>

          <EmailPwForm
            getValues={this.getEmailPwInput}
            errorMsg={this.state.errorMsg}
          />

          <button type="submit"> Next </button>
        </form>
        <p
          style={{
            color: this.state.formStatusMsg.color,
            fontSize: this.state.formStatusMsg.fontSize
          }}
        >
          {this.state.formStatusMsg.text}
        </p>

        <p>{this.state.firstName}</p>
        <p>{this.state.lastname}</p>
        <p>{this.state.genderValue}</p>
        <p>{this.state.email}</p>
        <p>{this.state.password}</p>
        <p>{this.state.alo}</p>
      </div>
    );
  }
}

export default Form;
