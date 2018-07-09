import React from 'react';
import ReactDOM from 'react-dom';

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNote: "a",
      secondNote: "b",
      thirdNote: "c"
    }
  }

  render() {
    return (
      <div>
        <Note value={this.state.firstNote} />
        <Note value={this.state.secondNote} />
        <Note value={this.state.thirdNote} />
      </div>
    )
  }
}

class Note extends React.Component {
  render() {
    return <li> {this.props.value} </li>
  }
}

ReactDOM.render(<NotesApp />, document.getElementById('root'));
