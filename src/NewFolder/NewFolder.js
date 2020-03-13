import React from 'react';
import NoteContext from '../NoteContext';
import config from '../config';

class NewFolder extends React.Component {
	
	static contextType = NoteContext;

	handleSubmit = (event) => {
		event.preventDefault();
		const folder = {
			name: event.target['new-folder-name'].value
		}
		fetch(`${config.API_ENDPOINT}/folders`, {
			method: 'POST',
			headers: {
        'content-type': 'application/json'
			},
			body: JSON.stringify(folder)
		})
		.then(response => {
			if(!response.ok)
				return response.json().then(event => Promise.reject(event))
				return response.json();
		})
		.then(folder => {
			this.context.newFolder(folder);
			this.props.history.push(`/folder/${folder.id}`)
		})
		.catch(error => {
			console.error(error);
		})
	}

	render() {
		return (
			<>
				<section>
					<h2>Create a Folder</h2>
					<form onSubmit={this.handleSubmit}> 
					<label htmlFor="folder-name-field">Folder Name:</label>
					<div>
						<input type="text" name="new-folder-name"></input>
					</div>
						<button type="submit">Create Folder</button>
					</form>
				</section>
			</>
		)
	}
}



export default NewFolder;


// Create a new component AddFolder that implements a form to capture the name of a new folder from the user. 
// This form should submit the name of the new folder to the POST /folders endpoint on the server.
// Ensure that any errors are properly handled. 
// Add a button to the navigation to invoke the new form.