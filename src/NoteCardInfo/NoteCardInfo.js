import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NoteContext from '../NoteContext';
import config from '../config';
import './NoteCardInfo.css';
import '../App.css';

//https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date 
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

class NoteCardInfo extends Component {
  
  static contextType = NoteContext; 

  handleClickDelete = (event) => {
    event.preventDefault();
    const noteId = this.props.id;
    console.log(noteId);

    
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

    const modified = formatDate(new Date(this.props.modified));

    return (
      <>
        <Link to={`/notes/${this.props.id}`} className="note-card-title">{this.props.name}</Link>
        <div className="NoteCardInfo">
          <p>Modified on {modified}</p>
          <button onClick={this.handleClickDelete}>Delete Note</button>
        </div>
      </>
    )
  }
}

export default NoteCardInfo;


