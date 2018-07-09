import React from 'react';
import ReactDOM from 'react-dom';

class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstToDoNote: "a",
      secondToDoNote: "b",
      thirdToDoNote: "c"
    }
    this.handleClick = () => alert("Fuck off!");
  }

  render() {
    return (
      <ul>
        <ToDoNote value={this.state.firstToDoNote} onClick={this.handleClick} />
        <ToDoNote value={this.state.secondToDoNote} onClick={this.handleClick} />
        <ToDoNote value={this.state.thirdToDoNote} onClick={this.handleClick} />
      </ul>
    )
  }
}

class ToDoNote extends React.Component {
  render() {
    return <li onClick={this.props.onClick}> {this.props.value} </li>
  }
}

ReactDOM.render(<ToDoApp />, document.getElementById('root'));
