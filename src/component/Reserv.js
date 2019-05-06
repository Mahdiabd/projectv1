import React, { useState, Fragment } from 'react'
import AddUserForm from './AddUserForm'
import UserTable from './UserTable'
import EditUserForm from './EditUserForm'

const Reserv = () => {
	// Data
	const usersData = [
		//{ id: 1, name: 'Tania', room: 'floppydiskette', adulte:'2', enfant:'' },
		// { id: 2, name: 'Craig', username: 'siliconeidolon' },
		// { id: 3, name: 'Ben', username: 'benisphere' },
	]

	const initialFormState = { id: null, name: '', room: '', adulte:'', enfant:'',  }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, room: user.room, adulte: user.adulte, enfant: user.enfant, info: user.info, date: user.date, nuit: user.nuit, mail: user.mail, })
	}

	return (
		<div className="container">
			<h1>Réservation</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Réservation</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Veuillez remplir le formulaire ci-dessous</h2>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</div>
				
			</div>
		</div>
	)
}

export default Reserv;