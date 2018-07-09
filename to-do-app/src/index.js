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
    this.handleClick = () => alert("Fuck off!");
  }

  render() {
    return (
      <ul>
        <Note value={this.state.firstNote} onClick={this.handleClick} />
        <Note value={this.state.secondNote} onClick={this.handleClick} />
        <Note value={this.state.thirdNote} onClick={this.handleClick} />
      </ul>
    )
  }
}

class Note extends React.Component {
  render() {
    return <li onClick={this.props.onClick}> {this.props.value} </li>
  }
}

ReactDOM.render(<NotesApp />, document.getElementById('root'));
