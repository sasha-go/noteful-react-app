import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NoteContext from '../NoteContext';
import '../App.css';

class NotePageSidebar extends Component {
  static contextType = NoteContext;

  render() {

      const selectedFolderId = this.context.notes.find(
        note => note.id === this.props.match.params.noteId
      ).folderId

      const selectedFolder = this.context.folders.find(
        folder => folder.id === selectedFolderId
      )

    return (
      <>
       <div className="Sidebar">
        <Link to='/' className="back-btn"><button>Go Back</button></Link>
        <h2>{selectedFolder.name}</h2>
      </div>
      </>
    )
  }
}

export default NotePageSidebar;