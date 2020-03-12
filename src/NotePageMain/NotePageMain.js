import React, { Component } from 'react';
import './NotePageMain.css';
import NoteCardInfo from '../NoteCardInfo/NoteCardInfo';
import NoteContext from '../NoteContext';

class NotePageMain extends Component {
  static contextType = NoteContext;

  render() {
    
    const selectedNote = this.context.notes.find(
      note => note.id === this.props.match.params.noteId
    )

    return(
      <>
        <div className="NotePageMain">
        <NoteCardInfo modified={selectedNote.modified} id={selectedNote.id} name={selectedNote.name} />
  
        <p className="note-content">{selectedNote.content}</p>
        </div>
      </>
    )
  }
}

export default NotePageMain;


