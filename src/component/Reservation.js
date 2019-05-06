import React, { Component } from "react";
import firebase from "firebase";
import { Link } from 'react-router-dom';
class Reservation extends Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.state = {
      email: "",
      nom: "",
      number: "",
      date:"",
      adulte:"",
      enfant:"",
      infos:"",

      
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
          <h1>Réservation</h1>
          <div className="FormCenter">
          
          <form  onSubmit={this.onFormSubmit}>
          <div className="FormField">
            <label className="FormField__Label" >Du</label>
            <input className="FormField__Input2" 
              type="Date"
              value={this.state.date}
              onChange={this.onInputChange}
              name="date"
            />
            </div>
          <div className="FormField">
            <label className="FormField__Label" >Au</label>
            <input className="FormField__Input2" 
              type="Date"
              value={this.state.date}
              onChange={this.onInputChange}
              name="date"
            />
            </div>
          <div className="FormField">
            <label className="FormField__Label" >email</label>
            <input className="FormField__Input2" 
              type="email"
              value={this.state.email}
              onChange={this.onInputChange}
              name="email"
            />
            </div>
            <br />
            <div className="FormField">
            <label className="FormField__Label" >Nom & Prénom</label>
            <input className="FormField__Input2" 
              type="text"
              value={this.state.nom}
              name="nom"
              onChange={this.onInputChange}
            />
            </div>
            <br />
            <div className="FormField">
            <label className="FormField__Label" >Nombre de Chambre</label>
            <input 
              type="number"
              value={this.state.number}
              onChange={this.onInputChange}
              name="number"
            />
            </div>
            <br /> 
            <div className="FormField">
            <label className="FormField__Label" >Nombre Adultes</label>
            <input 
              type="number"
              value={this.state.adulte}
              onChange={this.onInputChange}
              name="adulte"
            />
            </div>
            <div className="FormField">
            <label className="FormField__Label" >Nombre Enfant</label>
            <input  
              type="number"
              value={this.state.enfant}
              onChange={this.onInputChange}
              name="enfant"
            />
            </div>
            <div >
            <label className="FormField__Label" >Autres Informations</label>
            <input  
              type="text area"
              value={this.state.infos}
              onChange={this.onInputChange}
              name="infos"
            />
            </div>
            <br />
            <input className="MyButton"
            type="submit" value="Réservez" /> 
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

export default Reservation;