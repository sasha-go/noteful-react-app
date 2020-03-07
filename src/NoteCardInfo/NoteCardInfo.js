import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NoteCardInfo.css';
import NoteContext from '../NoteContext';
import '../App.css'

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


  render() {

    const modified = formatDate(new Date(this.props.modified));

    return (
      <>
        {/* Why isn't context working here? */}
        <Link to={`/notes/${this.props.id}`} className="note-card-title">{this.props.name}</Link>
        <div className="NoteCardInfo">
          <p>Last modified: {modified}</p>
          <button>Delete Note</button>
        </div>
      </>
    )
  }
}

export default NoteCardInfo;


