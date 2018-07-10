import React from 'react';

class ToDoNote extends React.Component {
  render() {
    return <li onClick={this.props.handleClick} value={this.props.value}> {this.props.value} </li>
  }
}

export default ToDoNote;
