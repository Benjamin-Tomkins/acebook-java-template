import React from 'react';

class ToDoNote extends React.Component {
  render() {
    return <li onClick={this.props.handleClick}> {this.props.value} </li>
  }
}

export default ToDoNote;
