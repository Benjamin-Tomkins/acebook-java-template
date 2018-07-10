import React from 'react';
import ToDoNote from './toDoNote';
import InputForm from './inputForm';

class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: ["note 1", "note 2", "note 3"],
      newNote: ''
    }
    this.handleClickOnNote = () => alert("Fuck off!");
    this.handleChangeOfTextbox = (event) => {
      this.setState({newNote: event.target.value});
    }
    this.handleClickCreateButton = () => {
      this.setState({notes: this.state.notes.concat(this.state.newNote)});
      this.setState({newNote: ''});
    }
    this.renderNote = (note, index) => {
      return <ToDoNote key={index} value={note} handleClick={this.handleClickOnNote} />
    }
    this.renderNotes = () => {
      return this.state.notes
        .map((note, index) => this.renderNote(note, index));
    }
  }

  render() {
    return (
      <div>
        <h1>Rahul's Primitive Notes App</h1>
        <InputForm value={this.state.newNote} handleChange={this.handleChangeOfTextbox} handleClick={this.handleClickCreateButton} />
        <ul>{this.renderNotes()}</ul>
      </div>
    )
  }
}

export default ToDoApp;
