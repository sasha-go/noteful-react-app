import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NoteCardInfo.css';
import NoteContext from '../NoteContext';
import '../App.css'

class NoteCardInfo extends Component {
  static contextType = NoteContext; 

  render() {

    return (
      <>
        <Link to={`/notes/${this.context.id}`} className="note-card-title">{this.context.name}</Link>
        <div className="NoteCardInfo">
          <p>Last modified: {this.context.modified}</p>
          <button>Delete Note</button>
        </div>
      </>
    )
  }
}

export default NoteCardInfo;


