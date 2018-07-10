import React from 'react';
import ToDoNote from './toDoNote';
import InputForm from './inputForm';
import DetailedView from './detailedView';

class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      newNote: '',
      detailedView: "no note selected"
    }
    this.handleClickOnNote = (event) => {
      this.setState({detailedView: event.target.getAttribute('value')})
    };
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
        <h2>Detailed View of Selected Note</h2>
        <DetailedView value={this.state.detailedView}/>
        <h2>Your Notes</h2>
        <ul>{this.renderNotes()}</ul>
      </div>
    )
  }
}

export default ToDoApp;
