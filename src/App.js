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
import NotePageSidebar from './NoteListSidebar/NoteListSidebar';

class App extends Component {
  state = STORE;

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to={"/"} className="title">Noteful</Link>
        </header>

        {/* Sidebar */}
        <div>
          <Route 
            path="/folder/:folderId"
            render={(props) => <NoteListSidebar folders={STORE.folders} {...props} />}
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
          {/* <Route
            path="/notes/:noteId"
            render={(props) => <NoteCardInfo notes={STORE.notes} {...props} />}
          /> */}
          <Route
            exact path="/"
            render={(props) => <NoteListMain notes={STORE.notes} {...props} />}
          />
        </div>

        {/* NotePageMain  */}
        <div>
        {/* <Route 
            path="/notes/:noteId"
            render={(props) => {
              const selectedFolder = this.state.folders.find(folder => folder.id === p)
              return (
                <NotePageSidebar folders={STORE.folders} {...props} />
              )
            }
          />   */}
        <Route
            exact
            path='/notes/:noteId'
            render={(props) => {
              const selectedFolderId = this.state.notes.find(
                note => note.id === props.match.params.noteId
              ).folderId

              const selectedFolder = this.state.folders.find(
                folder => folder.id === selectedFolderId
              )
              return (
                <NotePageSidebar {...selectedFolder} {...props} />
              )
            }}
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
      
        </div>
         
      </div>
    );
  }
  
}

export default App;
