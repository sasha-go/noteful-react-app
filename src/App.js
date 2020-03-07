import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

// Data
import STORE from './STORE';

//Components
import NoteListMain from './NoteListMain/NoteListMain';
import NoteListSidebar from './NoteListSidebar/NoteListSidebar';
import NoteCardInfo from './NoteCardInfo/NoteCardInfo';
import NotePageMain from './NotePageMain/NotePageMain';
import NotePageSidebar from './NotePageSidebar/NotePageSidebar';

class App extends Component {
  state = STORE;

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to={"/"} className="title">Noteful</Link>
        </header>

        {/* Sidebar */}
        <div className="folder-sidebar">
          <Route 
            path="/folder/:folderId"
            render={(props) => <NoteListSidebar folders={STORE.folders} {...props} />}
          />
          <Route
            path='/notes/:noteId'
            render={(props) => {
              const selectedFolderId = this.state.notes.find(
                note => note.id === props.match.params.noteId
              ).folderId

              const selectedFolder = this.state.folders.find(
                folder => folder.id === selectedFolderId
              )

              return (
                <NotePageSidebar selectedFolder={selectedFolder} {...props} />
              )
            }}
          />
          <Route 
            exact path="/"
            render={(props) => <NoteListSidebar folders={STORE.folders} {...props} />} 
          />

        </div>
        

        {/* NoteListMain / NoteCardInfo  */}
        <div>
          <Route
            path="/folder/:folderId"
            render={(props) => <NoteListMain notes={STORE.notes} {...props} />}
          />
          <Route
            path='/notes/:noteId'
            render={(props) => {
              const selectedNote = this.state.notes.find(
                note => note.id === props.match.params.noteId
              )
              return (
                <NotePageMain {...selectedNote}/>
              )
            }}
          />  
           <Route
            exact path="/"
            render={(props) => <NoteListMain notes={STORE.notes} {...props} />}
          />
          {/* Deleted below - cause extra note info to appear below header */}
          {/* <Route
            path="/notes/:noteId"
            render={(props) => <NoteCardInfo notes={STORE.notes} {...props} />}
          /> */}
         
        </div>

      </div>
    );
  }
  
}

export default App;
