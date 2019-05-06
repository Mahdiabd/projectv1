import React, { Component } from "react";
import firebase from "firebase";
import { Link } from 'react-router-dom';
class SignUp extends Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      errorMessage: ""
    };
  }

  generateId() {
    return btoa(Math.random()).substring(0, 12);
  }

  onInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(connectedUser => {
        firebase
          .database()
          .ref("users/" + connectedUser.user.uid)
          .set({
            id: connectedUser.user.uid,
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName
          })
          .then(() => {
            this.props.history.push("/");
          });
      })
      .catch(err => {
        this.setState({ errorMessage: err.message });
      });
  }

  render() {
    return (
      <div>
        <center>
          <h1>Sign Up</h1>
          <div className="FormCenter">
          
          <form  onSubmit={this.onFormSubmit}>
          <div className="FormField">
            <label className="FormField__Label" >email</label>
            <input className="FormField__Input" 
              type="email"
              value={this.state.email}
              onChange={this.onInputChange}
              name="email"
            />
            </div>
            <br />
            <div className="FormField">
            <label className="FormField__Label" >first Name</label>
            <input className="FormField__Input" 
              type="text"
              value={this.state.firstName}
              name="firstName"
              onChange={this.onInputChange}
            />
            </div>
            <br />
            <div className="FormField">
            <label className="FormField__Label" >last NAME</label>
            <input className="FormField__Input" 
              type="text"
              value={this.state.lastName}
              onChange={this.onInputChange}
              name="lastName"
            />
            </div>
            <br /> 
            <div className="FormField">
            <label className="FormField__Label" >password</label>
            <input className="FormField__Input" 
              type="password"
              value={this.state.password}
              onChange={this.onInputChange}
              name="password"
            />
            </div>
            <br />
            <input className="FormField__Button mr-20"
            type="submit" value="inscription" /> <Link to="/SignIn" className="FormField__Link">I'm already member</Link>
          </form>
          </div>
          {this.state.errorMessage && (
            <div style={{ color: "red" }}>{this.state.errorMessage}</div>
          )}
        </center>
      </div>
    );
  }
}

export default SignUp;