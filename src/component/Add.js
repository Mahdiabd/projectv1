import React, { Component } from "react";
import firebase from "firebase";
class Add extends Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.state = {
      nom: "",
      adresse: "",
      urlImage: "",
      tel:""

    };
  }

  generateId() {
    return btoa(Math.random()).substring(0, 12);
  }

  onFormSubmit(event) {
    event.preventDefault();

    const id = this.generateId();

    let newMH = {
      id: id,
      nom: this.state.nom,
      adresse: this.state.adresse,
      urlImage: this.state.urlImage,
      tel: this.state.tel
    };

    firebase
      .database()
      .ref("MH/" + id)
      .set(newMH);

    this.setState({ nom: "", adresse: "", urlImage: "", tel:"", });
    this.props.history.push("/Home");
  }

  onInputChange(event) {
    let newState = {};

    newState[event.target.name] = event.target.value;

    this.setState(newState);
  }

  render() {
    return (
      <div>
        <center>
          <h1>ADD FORM</h1>
          <form onSubmit={this.onFormSubmit}>
            <label>Nom</label>
            <input
              type="text"
              value={this.state.nom}
              onChange={this.onInputChange}
              name="nom"
            />
            <br />
            <label>Adresse</label>
            <input
              type="text"
              value={this.state.adresse}
              name="description"
              onChange={this.onInputChange}
            />
            <br />
            <label>Tel</label>
            <input
              type="text"
              value={this.state.tel}
              name="tel"
              onChange={this.onInputChange}
            />

            <br />
            <label>urlImage</label>
            <input
              type="text"
              value={this.state.urlImage}
              onChange={this.onInputChange}
              name="urlImage"
            />
            <br />

            <input type="submit" value="add" />
          </form>
        </center>
      </div>
    );
  }
}

export default Add;