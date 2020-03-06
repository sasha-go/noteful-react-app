import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NoteListSidebar.css';
import NoteCardInfo from '../NoteCardInfo/NoteCardInfo';


class NoteListSidebar extends Component {
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
      <div className='NoteListSidebar'>
          <ul>
            {notes.map((note) => {
              return (<div key={note.id} className="note-list-sidebar">
								<Link to={`notes/${note.id}`}>{note.name}</Link>
                <NoteCardInfo notes={this.props.notes} {...this.props} />
								{/* <p>Date Modified on:  {note.modified}</p>
								<button>Delete Note</button> */}
                </div>)
                ;
            })}
          </ul>
      </div>
    )
  }
}

export default NoteListSidebar;

