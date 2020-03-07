import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class NotePageSidebar extends Component {


  render() {
    return (
      <>
       <div className="Sidebar">
        <Link to='/' className="back-btn"><button>Go Back</button></Link>
        <h2>{this.props.selectedFolder.name}</h2>
      </div>
      </>
    )
  }
}

export default NotePageSidebar;