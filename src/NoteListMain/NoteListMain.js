import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NoteListMain.css'


class NoteListMain extends Component {


  render() {
    const { folders } = this.props;
    const selectedId = this.props.match.params.folderId;

    return (
      <>
        <div className='NoteListMain'>
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
        </div>
      </>
    )
  }
}

export default NoteListMain;
