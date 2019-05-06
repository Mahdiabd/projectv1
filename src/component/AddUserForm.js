import React, { Component } from "react";
import firebase from "firebase";
import { Link, withRouter } from "react-router-dom";

class AddUserForm extends Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.state = {
      name: "",
      mail: "",
      nuit: "",
      date: "",
      room: "",
      adulte: "",
      enfant: "",
      info: ""
    };
  }

  generateId() {
    return btoa(Math.random()).substring(0, 12);
  }
  onFormSubmit(event) {
    event.preventDefault();

    const id = this.generateId();

    let newReserv = {
      id: id,
      name: this.state.name,
      mail: this.state.mail,
      nuit: this.state.nuit,
      date: this.state.date,
      adulte: this.state.adulte,
      enfant: this.state.enfant,
      info: this.state.info
    };

    firebase
      .database()
      .ref("reservation/" + id)
      .set(newReserv);

    this.setState(
      {
        name: "",
        mail: "",
        nuit: "",
        date: "",
        room: "",
        adulte: "",
        enfant: "",
        info: ""
      },
      () => {
        this.props.history.push("/voucher");
      }
    );
  }

  onInputChange(event) {
    let newState = {};

    newState[event.target.name] = event.target.value;

    this.setState(newState);
  }

  render() {
    console.log("testtttttt", this.props.history);
    return (
      <div>
        <center>
          <h1>Formulaire de réservation</h1>
          <form onSubmit={this.onFormSubmit}>
            <label className="FormField__Label">Nom & Prénom</label>
            <input
              className="FormField__Input2"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onInputChange}
            />
            <br /> <br />
            <br />
            <label className="FormField__Label">Adresse Mail</label>
            <input
              className="FormField__Input2"
              type="mail"
              name="mail"
              value={this.state.mail}
              onChange={this.onInputChange}
            />
            <br /> <br />
            <br />
            <label className="FormField__Label">Nombre de nuités</label> <br />
            <input
              type="number"
              name="nuit"
              value={this.state.nuit}
              onChange={this.onInputChange}
            />
            <br /> <br />
            <label className="FormField__Label">Check In</label> <br />
            <input
              type="Date"
              name="date"
              value={this.state.date}
              onChange={this.onInputChange}
            />
            <br /> <br />
            <label className="FormField__Label">Nombre de chambres</label>{" "}
            <br />
            <input
              type="number"
              name="room"
              value={this.state.room}
              onChange={this.onInputChange}
            />
            <br /> <br />{" "}
            <label className="FormField__Label">Nombre d'adultes</label> <br />
            <input
              type="number"
              name="adulte"
              value={this.state.adulte}
              onChange={this.onInputChange}
            />
            <br /> <br />
            <label className="FormField__Label">Nombre d'enfants</label> <br />
            <input
              type="number"
              name="enfant"
              value={this.state.enfant}
              onChange={this.onInputChange}
            />
            <br /> <br />{" "}
            <label className="FormField__Label">Autres informations</label>{" "}
            <br />
            <input
              className="sandouk"
              type="textarea"
              name="info"
              value={this.state.info}
              onChange={this.onInputChange}
            />
            <br />
            <br />
            <input className="MyButton" type="submit" value="Réserver" />
          </form>
          <br/>
        </center>
      </div>
    );
  }
}

export default withRouter(AddUserForm);
