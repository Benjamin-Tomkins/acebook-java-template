import React from 'react';

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.props.changeHandler;
    this.handleClick = this.props.clickHandler;
  }
  render() {
    return (
      <div>
        <input type="text" value={this.props.value} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Create Note</button>
      </div>)
  }
}

export default InputForm;
