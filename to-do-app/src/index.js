import React from 'react';
import ReactDOM from 'react-dom';

class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: ["note 1", "note 2", "note 3"]
    }
    this.handleClick = () => alert("Fuck off!");
  }

  render() {
    return (
      <ul>
        <ToDoNote value={this.state.notes[0]} onClick={this.handleClick} />
        <ToDoNote value={this.state.notes[1]} onClick={this.handleClick} />
        <ToDoNote value={this.state.notes[2]} onClick={this.handleClick} />
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
