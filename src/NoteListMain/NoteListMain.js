import React, { Component } from 'react';
import './NoteListMain.css';
import NoteCardInfo from '../NoteCardInfo/NoteCardInfo';
import NoteContext from '../NoteContext';


class NoteListMain extends Component {

  static contextType = NoteContext;

	// constructor(props) {
  //   super(props)
  //   this.state = {
  //     notes: this.props.notes,
	// 	}
  // }
  
  getNotesFromFolder = (selectedId) => {
    if (this.props.match.params.folderId) {
      return selectedId.filter((note) => {
        return note.folderId === this.props.match.params.folderId
      })
    }
    
    return selectedId;
  }
		
		// componentDidUpdate(prevProps, prevState) {
		// 	if (prevProps !== this.props) {
		// 		const selectedId = this.props.match.params.folderId;
				
		// 		if (selectedId) {
		// 			const filteredNotes = this.props.notes.filter((note) => note.folderId === selectedId);
		
		// 			this.setState({
		// 				notes: filteredNotes
		// 			});
		// 		}
		// 	}
    // }
    
  render() {
		const notes = this.getNotesFromFolder(this.context.notes);

    return (
      <div className='NoteListMain'>
        <h2>Notes</h2>
          <ul>
            {notes.map((note) => {
              return (
                <div key={note.id} className="note-list">
                <NoteCardInfo modified={note.modified} key={note.id} id={note.id} name={note.name} content={note.content} />
                </div>)
                ;
            })}
          </ul>
          <button>New Note</button>
      </div>
    )
  }
}

NoteListMain.defaultProps = {
  notes: []
}

export default NoteListMain;
