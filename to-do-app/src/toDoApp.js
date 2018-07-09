import React from 'react';
import ToDoNote from './toDoNote';
import InputForm from './inputForm';

class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: ["note 1", "note 2", "note 3"]
    }
    this.handleClick = () => alert("Fuck off!");
    this.renderNote = (note, index) => {
      return <ToDoNote key={index} value={note} onClick={this.handleClick} />
    }
    this.renderNotes = () => {
      return this.state.notes
        .map((note, index) => this.renderNote(note, index));
      }
  }

  render() {
    return (
      <div>
        <InputForm />
        <ul>{this.renderNotes()}</ul>
      </div>
    )
  }
}

export default ToDoApp;
