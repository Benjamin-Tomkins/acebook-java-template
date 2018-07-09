import React from 'react';
import ReactDOM from 'react-dom';

class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: ["note 1", "note 2", "note 3"]
    }
    this.handleClick = () => alert("Fuck off!");
    this.renderNote = (note, index) => {
      return (
        <ToDoNote
          key={index}  value={note}
          onClick={this.handleClick}
        />
      );
    }
    this.renderNotes = () => {
      return this.state.notes
        .map((note, index) => this.renderNote(note, index));
      }
  }

  render() {
    return <ul>{this.renderNotes()}</ul>
  }
}

class ToDoNote extends React.Component {
  render() {
    return <li onClick={this.props.onClick}> {this.props.value} </li>
  }
}

ReactDOM.render(<ToDoApp />, document.getElementById('root'));
