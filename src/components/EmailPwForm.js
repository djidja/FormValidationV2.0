import React, { Component } from "react";

const initialState = {
  email: "",
  emailError: "",
  password: "",
  passwordError: ""
};

class EmailPwForm extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  changed = async event => {
    await this.setState({ [event.target.id]: event.target.value });

    //props function to sent back data to parent component
    this.props.getValues(
      this.state.email,
      this.state.password,
      this.state.emailError,
      this.state.passwordError
    );
  };

  render() {
    return (
      <div>
        <div>
          <label>E-mail</label>
          <input
            id="email"
            onChange={this.changed}
            type="text"
            value={this.state.email}
            placeholder="Type your email"
          />
          <p>{this.state.emailError}</p>
        </div>
        <div>
          <label>Password</label>
          <input
            id="password"
            onChange={this.changed}
            type="password"
            value={this.state.password}
            placeholder="Type your password"
          />
          <p>{this.state.passwordError}</p>
        </div>
      </div>
    );
  }
}

export default EmailPwForm;
