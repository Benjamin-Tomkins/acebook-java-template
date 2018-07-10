import React from 'react';

class InputForm extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.value}
          onChange={this.props.handleChange}
        />
        <button onClick={this.props.handleClick}>Create Note</button>
      </div>)
  }
}

export default InputForm;
