import React, { Component } from "react";

class EmailPwForm extends Component {
  render() {
    return (
      <div>
        <div>
          <label>E-mail</label>
          <input id="email" type="text" placeholder="Type your email" />
        </div>
        <div>
          <label>Password</label>
          <input
            id="password"
            type="password"
            placeholder="Type your password"
          />
        </div>
      </div>
    );
  }
}

export default EmailPwForm;
