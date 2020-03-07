import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import NoteContext from '../NoteContext'
import '../App.css';

class NoteListSidebar extends Component {
  static contextType = NoteContext;

  render() {
    const { folders } = this.context;
    const selectedId = this.props.match.params.folderId;

    return (
      <>
        <h2>Folders</h2>
        <ul>
          {folders.map((folder) => {
            return (
            <li 
              key={folder.id} 
              className={`${selectedId === folder.id ? "selected-class" : ""}`}>
              <NavLink 
                to={`/folder/${folder.id}`}>{folder.name}
              </NavLink>
            </li>);
          })}
        </ul>
        <button>New Folder</button>
      </>
    )
  }
}


NoteListSidebar.defaultProps = {
  folders: []
}

export default NoteListSidebar;
