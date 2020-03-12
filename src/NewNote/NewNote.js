import React from 'react';

class NewNote extends React.Component {

	render() {
		return (
			<>
				<section>
					<h2>Create a Note</h2>
					<form>
						<label for="note-name-field">Name</label>
						<input type="text"></input>
						<label for="content-name-field">Note Content</label>
						<input type="text"></input>
						<label for="folder-dropdown-field">Folder</label>
						<input type="text"></input>
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