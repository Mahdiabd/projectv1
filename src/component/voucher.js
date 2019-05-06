import React, { useState, Fragment, useEffect } from "react";
import AddUserForm from "./AddUserForm";
import EditUserForm from "./EditUserForm";
import firebase from "./FireBaseConfig";

import UserTable from "./UserTable";

const Reserv = () => {
  // Data
  const usersData = [];

  const initialFormState = {
    id: null,
    name: "",
    room: "",
    adulte: "",
    enfant: ""
  };

  // Setting state
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  //get users
  useEffect(() => {
    firebase
      .database()
      .ref("/reservation")
      .once("value")
      .then(reservation => {
        let newBlogList = [];

        const bolgsObject = reservation.val();

        for (const blog in bolgsObject) {
          newBlogList = [...newBlogList, bolgsObject[blog]];
        }

        setUsers(newBlogList);
      });
  }, []);
  // CRUD operations
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = id => {
    setEditing(false);

    setUsers(users.filter(user => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  const editRow = user => {
    setEditing(true);

    setCurrentUser({
      id: user.id,
      name: user.name,
      room: user.room,
      adulte: user.adulte,
      enfant: user.enfant,
      info: user.info,
      date: user.date,
      nuit: user.nuit,
      mail: user.mail
    });
  };

  return (
    <div className="container">
     
      <div className="flex-row">
        <div className="flex-large">
          <br /> <br />
          <br />
          <div className="flex-large">
            <br /> <br />
            <br />
            <center>
              <h1 className="voucher">Voucher</h1>
            </center>
            <UserTable
              users={users}
              editRow={editRow}
              deleteUser={deleteUser}
            />
            

            <h3>Important</h3>
            <p>- Prière de présenter le voucer à l'acceuil de la maison d'hôte
<br/>
               - La totalité du montant sera payé à la maison d'hôte.
<br/>
               - Le check in est à partir de 14H. en cas de early check in, veuillez contacter l'hôte 48h à l'avance.
<br/>
               - Le check out ne doit dépasser 12H.
<br/>
            </p>
          </div>
        </div>
      </div>
      <form>
  <input id="impression" name="impression" type="button" onclick="imprimer_page()" value="Imprimer cette page" />
</form>
    </div>
  );
};

export default Reserv;
