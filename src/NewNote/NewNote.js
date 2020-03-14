import React from 'react';
import NoteContext from '../NoteContext';
import config from '../config';


class NewNote extends React.Component {

	static contextType = NoteContext;

	handleSubmit = (event) => {
		event.preventDefault();
		const newNote = {
			name: event.target['note-name-field'].value,
			content: event.target['content-name-field'].value,
			folderId: event.target['note-folder-id'].value,
			modified: new Date(),
		}
		fetch(`${config.API_ENDPOINT}/notes`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(newNote)
		})
		.then(response => {
			if(!response.ok)
				return response.json().then(event => Promise.reject(event))
				return response.json();
		})
		.then(note => {
			this.context.newNote(note);
			this.props.history.push(`/folder/${note.folderId}`)
		})
		.catch(error => {
			console.error(error);
		})
	}

	render() {
		return (
			<>
				<section>
					<h2>Create a Note</h2>
					<form onSubmit={this.handleSubmit}> 
						<div>
							<label htmlFor="note-name-field">Name</label>
							<input type="text" name="note-name-field"></input>
						</div>
						<div>
							<label htmlFor="content-name-field">Note Content</label>
							<textarea type="text" name="content-name-field"></textarea>
						</div>
						<div>
							<label htmlFor="folder-dropdown-field">Folder</label>
							<select name="note-folder-id">
								<option value={null}>Select a folder</option>
								{this.context.folders.map(folder => 
									<option key={folder.id} value={folder.id}>
										{folder.name}
									</option>
								)}
							</select>
						</div>
						<button type="submit">Add Note</button>
					</form>
				</section>
			</>
		)
	}
}




export default NewNote;

// Create a new component AddNote that implements a form to capture the name, content and folder for a new Note. 
//Submit to the POST /notes endpoint on the server. Add validation to ensure that the name of the note is not left blank. 
// The folder should be selected from a list of existing folders. 
//Ensure that errors are properly handled. 
// Add a button to the note list page to invoke this new form.