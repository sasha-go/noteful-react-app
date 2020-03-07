import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

// Data
import STORE from './STORE';

// Context
import NoteContext from './NoteContext';

//Components
import NoteListMain from './NoteListMain/NoteListMain';
import NoteListSidebar from './NoteListSidebar/NoteListSidebar';
import NotePageMain from './NotePageMain/NotePageMain';
import NotePageSidebar from './NotePageSidebar/NotePageSidebar';


class App extends Component {
  state = STORE;

  render() {

    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
      // deleteNote:
    }


    return (
      <div className="App">
        <NoteContext.Provider value={contextValue}>
          <header className="App-header">
            <Link to={"/"} className="title">Noteful</Link>
          </header>

          {/* Sidebar */}
          <div className="folder-sidebar">
            <Route 
              path="/folder/:folderId"
              component={NoteListSidebar}
            />
            <Route
              path='/notes/:noteId'
              component={NotePageSidebar} />
            <Route 
              exact path="/"
              component={NoteListSidebar} 
            />

          </div>
          

          {/* Main */}
          <div>
            <Route
              path="/folder/:folderId"
              component={NoteListMain}
            />
            <Route
              path='/notes/:noteId'
              component={NotePageMain}
            />  
            <Route
              exact path="/"
              component={NoteListMain}
            />
          </div>
        </NoteContext.Provider>
      </div>
    );
  }
  
}

export default App;
