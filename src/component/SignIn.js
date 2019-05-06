import React, { Component } from "react";
import firebase from "firebase";
class SignIn extends Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.state = {
      email: "",
      password: "",

      errorMessage: ""
    };
  }

  onFormSubmit(event) {
    event.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ errorMessage: error.message });
      });
  }

  onInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <center>
          <h1>Sign In</h1>
          <form  className="FormFields" onSubmit={this.onFormSubmit}>
          <div className="FormCenter">
            <label className="FormField__Label">email</label>
            <input className="FormField__Input2"
              type="email"
              value={this.state.email}
              onChange={this.onInputChange}
              name="email"
            />
            </div>
            <br />
            <div className="FormCenter">
            <label className="FormField__Label">password</label>
            <input className="FormField__Input2"
              type="password"
              value={this.state.password}
              onChange={this.onInputChange}
              name="password"
            />
            </div>
            <br />
            <div className="FormCenter">
            <input className="MyButton" type="submit" value="Sign In" />
            </div>
          </form>

          {this.state.errorMessage && (
            <div style={{ color: "red" }}>{this.state.errorMessage}</div>
          )}
        </center>
      </div>
    );
  }
}

export default SignIn;
