import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NoteCardInfo.css';

// function formatDate(date) {
//   var monthNames = [
//     "January", "February", "March",
//     "April", "May", "June", "July",
//     "August", "September", "October",
//     "November", "December"
//   ];

//   var day = date.getDate();
//   var monthIndex = date.getMonth();
//   var year = date.getFullYear();

//   return monthNames[monthIndex] + ' ' + day + ', ' + year;
// }


class NoteCardInfo extends Component {


  render() {
    // const modified = formatDate(new Date(this.props.modified));
    // console.log(modified)

    return (
      <>
        <Link to={`/notes/${this.props.id}`}>{this.props.name}</Link>
        <div className="NoteCardInfo">
          <p>Last modified: {this.props.modified}</p>
          <button>Delete Note</button>
        </div>
      </>
    )
  }
}

export default NoteCardInfo;


