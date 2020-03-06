import React, { Component } from 'react';
import './NoteListMain.css';
import NoteCardInfo from '../NoteCardInfo/NoteCardInfo';


class NoteListMain extends Component {
	constructor(props) {
    super(props)
    this.state = {
      notes: this.props.notes,
		}
	}
		
		componentDidUpdate(prevProps, prevState) {
			if (prevProps !== this.props) {
				const selectedId = this.props.match.params.folderId;
				
				if (selectedId) {
					const filteredNotes = this.props.notes.filter((note) => note.folderId === selectedId);
		
					this.setState({
						notes: filteredNotes
					});
				}
			}
		}

  render() {
		const { notes } = this.state;

    return (
      <div className='NoteListMain'>
        <h2>Notes</h2>
          <ul>
            {notes.map((note) => {
              return (<div key={note.id} className="note-list-sidebar">
								{/* <Link to={`notes/${note.id}`}>{note.name}</Link>
                <NoteCardInfo notes={this.props.notes} {...this.props} /> */}
                <NoteCardInfo modified={note.modified} key={note.id} id={note.id } name={note.name} content={note.content} />
								{/* <p>Date Modified on:  {note.modified}</p>
								<button>Delete Note</button> */}
                </div>)
                ;
            })}
          </ul>
          <button>New Note</button>
      </div>
    )
  }
}

export default NoteListMain;
