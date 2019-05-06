import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <center><form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label className="FormField__Label">Nom & Prénom</label> <br/>
			<input className="FormField__Input2" type="text" name="name" value={user.name} onChange={handleInputChange} />
            <br/> <br/>
            <label className="FormField__Label">Adresse Mail</label> <br/> 
			<input className="FormField__Input2" type="mail" name="mail" value={user.mail} onChange={handleInputChange} />
            <br/> <br/>
            <label className="FormField__Label">Nombre de nuités</label> <br/> 
			<input type="number" name="nuit" value={user.nuit} onChange={handleInputChange} />
            <br/> <br/><label className="FormField__Label">Check In</label> <br/> 
			<input type="Date" name="date" value={user.date} onChange={handleInputChange} />

            <br/>  <br/><label className="FormField__Label">Nombre de chambres</label> <br/>
			<input type="number" name="room" value={user.room} onChange={handleInputChange} />
            <br/>  <br/>  <label className="FormField__Label">Nombre d'adultes</label> <br/>
			<input type="number" name="adulte" value={user.adulte} onChange={handleInputChange} />
            <br/> <br/><label className="FormField__Label">Nombre d'enfants</label> <br/> 
			<input type="number" name="enfant" value={user.enfant} onChange={handleInputChange} />
            <br/>  <br/>	<label className="FormField__Label">Autres informations</label> <br/> 
			<input type="textarea" name="info" value={user.info} onChange={handleInputChange} />
      <button>Update user</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form></center>
  )
}

export default EditUserForm