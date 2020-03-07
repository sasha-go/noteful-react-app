import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NoteCardInfo.css';
import '../App.css'

class NoteCardInfo extends Component {


  render() {

    return (
      <>
        <Link to={`/notes/${this.props.id}`} className="note-card-title">{this.props.name}</Link>
        <div className="NoteCardInfo">
          <p>Last modified: {this.props.modified}</p>
          <button>Delete Note</button>
        </div>
      </>
    )
  }
}

export default NoteCardInfo;


