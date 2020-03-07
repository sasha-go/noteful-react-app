import React from 'react';

const NoteContext = React.createContext({
	folders: [],
	notes: [],
	newFolder: () => {},
	newNote: () => {},
	deleteNote: () => {}
})

export default NoteContext;