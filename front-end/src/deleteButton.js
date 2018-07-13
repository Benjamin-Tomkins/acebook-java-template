import React from 'react';

class DeleteButton extends React.Component {
  render() {
    return <input type="button" onClick={this.props.deleteButtonHandleClick} />
  }
}

export default DeleteButton;
