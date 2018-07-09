import React from 'react';
import ToDoNote from './toDoNote';
import InputForm from './inputForm';

class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: ["note 1", "note 2", "note 3"],
      newNote: 22
    }
    this.noteHandleClick = () => alert("Fuck off!");
    this.newNoteHandleChange = (event) => {
      event.preventDefault();
      this.setState({newNote: event.target.value});
      this.forceUpdate();
    }
    this.handleCreateNote = () => {
      alert(this.state.newNote);
      this.setState({newNote: ''});
      this.forceUpdate();
    }
    this.renderNote = (note, index) => {
      return <ToDoNote key={index} value={note} onClick={this.noteHandleClick} />
    }
    this.renderNotes = () => {
      return this.state.notes
        .map((note, index) => this.renderNote(note, index));
    }
  }

  render() {
    return (
      <div>
        <InputForm value={this.state.newNote} changeHandler={this.newNoteHandleChange} clickHandler={this.handleCreateNote} />
        <ul>{this.renderNotes()}</ul>
      </div>
    )
  }
}

export default ToDoApp;
