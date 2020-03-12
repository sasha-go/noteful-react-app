import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

// Data and config
// import STORE from './STORE';
import config from './config';

// Context
import NoteContext from './NoteContext';

//Components
import NoteListMain from './NoteListMain/NoteListMain';
import NoteListSidebar from './NoteListSidebar/NoteListSidebar';
import NotePageMain from './NotePageMain/NotePageMain';
import NotePageBoundary from './NotePageMain/NotePageBoundary';
import NewFolder from './NewFolder/NewFolder';
import NewNote from './NewNote/NewNote';


class App extends Component {
  // state = STORE;
  state = {
    notes: [],
    folders: []
  };
 
  // Fetching api for folder and note data
  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/notes`),
      fetch(`${config.API_ENDPOINT}/folders`)
      ])
      .then(([notesResponse, foldersResponse]) => {
          if (!notesResponse.ok)
              return notesResponse.json().then(e => Promise.reject(e));
          if (!foldersResponse.ok)
              return foldersResponse.json().then(e => Promise.reject(e));

          return Promise.all([notesResponse.json(), foldersResponse.json()]);
      })
      .then(([notes, folders]) => {
          this.setState({notes, folders});
      })
      .catch(error => {
          console.error({error});
      });
  }
    // fetch(config.API_ENDPOINT)
    //   .then(response => {
    //     if(!response.ok) {
    //       return response.json().then(e => Promise.reject(e))
    //     }
    //     return response;
    //   })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data)
    //   })

    handleDeleteNote = (noteId) => {      
      this.setState({
        notes: this.state.notes.filter(note => note.id !== noteId)
      })
    }

  render() {
    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.handleDeleteNote
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
            {/* <Route
              path='/notes/:noteId'
              component={NotePageSidebar} /> */}
            <Route 
              exact path="/"
              component={NoteListSidebar} 
            />

          </div>
          

          {/* Main */}
          <div className="main-route">
            <Route 
              path="/new-folder"
              component={NewFolder} 
            />
            <Route
              path='/new-note'
              component={NewNote}
            />
            <Route
              path="/folder/:folderId"
              component={NoteListMain}
            />
            <Route
              path='/notes/:noteId'
              render={(props) => {
                return (
                  <NotePageBoundary>
                    <NotePageMain {...props}/>
                  </NotePageBoundary>
                )
              }}
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
