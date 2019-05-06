import React from 'react'

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>Nom & Prénom</th>
        <th>Adresse Mail</th>
        <th>Nbre nuitées</th>
        <th>Check In</th>
        <th>Nbre de chambre</th>
        <th>Nbre adultes</th>
        <th>Nbre enfants</th>
        <th>Autres Informations</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.mail}</td>
            <td>{user.nuit}</td>
            <td>{user.date}</td>
            <td>{user.room}</td>
            <td>{user.adulte}</td>
            <td>{user.enfant}</td>
            <td>{user.info}</td>
            



            <td>
              <button
                onClick={() => {
                  props.editRow(user)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>Pas de Voucher</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable