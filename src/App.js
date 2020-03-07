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
import NotePageSidebar from './NotePageSidebar/NotePageSidebar';


class App extends Component {
  // state = STORE;
  state = {
    notes: [],
    folders: []
  };
 


  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/notes`),
      fetch(`${config.API_ENDPOINT}/folders`)
      ])
      .then(([notesRes, foldersRes]) => {
          if (!notesRes.ok)
              return notesRes.json().then(e => Promise.reject(e));
          if (!foldersRes.ok)
              return foldersRes.json().then(e => Promise.reject(e));

          return Promise.all([notesRes.json(), foldersRes.json()]);
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
