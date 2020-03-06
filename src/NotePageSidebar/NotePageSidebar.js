import React, { Component } from 'react';
import './NotePageSidebar.css';


class NotePageSidebar extends Component {


  render() {
    return (
      <>
       <div className="Sidebar">
        <Link to='/'>Go Back</Link>
        <h2>Current Folder: {this.props.selectedFolder.name}</h2>
      </div>
      </>
    )
  }
}

export default NotePageSidebar;