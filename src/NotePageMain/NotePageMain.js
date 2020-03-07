import React, { Component } from 'react';
import './NotePageMain.css';
import NoteCardInfo from '../NoteCardInfo/NoteCardInfo';
import NoteContext from '../NoteContext';

function formatDate(date) {

  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return monthNames[monthIndex] + ' ' + day + ', ' + year;
}

class NotePageMain extends Component {
  static contextType = NoteContext;

  render() {
    
    const selectedNote = this.context.notes.find(
      note => note.id === this.props.match.params.noteId
      )


    const modified = formatDate(new Date(this.props.name))
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


