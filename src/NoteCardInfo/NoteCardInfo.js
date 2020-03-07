import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NoteCardInfo.css';
import NoteContext from '../NoteContext';
import '../App.css'
import NotePageSidebar from '../NotePageSidebar/NotePageSidebar';

class NoteCardInfo extends Component {
  static contextType = NoteContext; 

  
  render() {

    return (
      <>
        {/* Why isn't context working here? */}
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


