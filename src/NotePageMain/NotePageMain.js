import React, { Component } from 'react';
import './NotePageMain.css';
import NoteCardInfo from '../NoteCardInfo/NoteCardInfo';


class NotePageMain extends Component {

  render() {
    
    return (
      <>
        <div className="NotePageMain">
        <NoteCardInfo modified={this.props.modified} id={this.props.id} name={this.props.name} />
  
        <p className="note-content">{this.props.content}</p>
        </div>
      </>
    )
  }
}

export default NotePageMain;


