import React, { Component } from 'react';
import './NotePageMain.css';
import NoteCardInfo from '../NoteCardInfo/NoteCardInfo';
import NoteContext from '../NoteContext';
import config from '../config';


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

  handleClickDelete = (event) => {
    event.preventDefault();
    const noteId = this.props.match.params.noteId;
    this.props.history.goBack();

    fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(response => {
        if (!response.ok) 
          return response.json().then(event => Promise.reject(event))
          return response.json();
      }) 
      .then(() => {
        this.context.deleteNote(noteId)
      })
      .catch(error => {
      console.error({error})
      })

  }

  render() {
    const selectedNote = this.context.notes.find(
      note => note.id === this.props.match.params.noteId
    )

    const modified = formatDate(new Date(selectedNote.modified));

    return(
      <>
        <div className="NotePageMain">
        {/* <NoteCardInfo modified={selectedNote.modified} id={selectedNote.id} name={selectedNote.name} /> */}
        <h1>{selectedNote.name}</h1>
        <p>Modified on {modified}</p>
  
        <p className="note-content">{selectedNote.content}</p>
        <button onClick={this.handleClickDelete}>Delete Note</button>

        </div>
      </>
    )
  }
}

export default NotePageMain;


