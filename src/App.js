import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

// Data
import STORE from './STORE';

//Components
import NoteListMain from './NoteListMain/NoteListMain';
import NoteListSidebar from './NoteListSidebar/NoteListSidebar';
import NoteCardInfo from './NoteCardInfo/NoteCardInfo';

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
            render={(props) => <NoteListMain folders={STORE.folders} {...props} />}
          />
          <Route 
            exact path="/"
            render={(props) => <NoteListMain folders={STORE.folders} {...props} />} 
          />
        </div>

        {/* NoteListMain / NoteCardInfo  */}
        <div>
          <Route
            path="/folder/:folderId"
            render={(props) => <NoteListSidebar notes={STORE.notes} {...props} />}
          />
          <Route
            path="/notes/:noteId"
            render={(props) => <NoteCardInfo notes={STORE.notes} {...props} />}
          />
          <Route
            exact path="/"
            render={(props) => <NoteListSidebar notes={STORE.notes} {...props} />}
          />
        </div>
      </div>
    );
  }
  
}

export default App;
