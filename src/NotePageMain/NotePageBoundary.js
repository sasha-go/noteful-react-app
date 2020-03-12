import React, { Component } from 'react';

class NotePageBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: true };
  }

  render() {
    console.log('notepageboundary');
    if (this.state.hasError) {
      console.log('hasError');
      return (
        <h2>This note does not exist.</h2>
      )
    }

    return this.props.children;
  }
}

export default NotePageBoundary;