import React from 'react';
import NoteContext from '../NoteContext';


class NewNote extends React.Component {

	static contextType = NoteContext;

	render() {
		return (
			<>
				<section>
					<h2>Create a Note</h2>
					<form>
						<div>
							<label for="note-name-field">Name</label>
							<input type="text"></input>
						</div>
						<div>
							<label for="content-name-field">Note Content</label>
							<textarea type="text"></textarea>
						</div>
						<div>
							<label for="folder-dropdown-field">Folder</label>
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