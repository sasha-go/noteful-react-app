import React from 'react';

class NewFolder extends React.Component {

	render() {
		return (
			<>
				<section>
					<h2>Create a Folder</h2>
						<label for="folder-name-field">Folder Name:</label>
					<div>
						<input type="text"></input>
					</div>
						<button type="submit">Create Folder</button>
					<form>
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