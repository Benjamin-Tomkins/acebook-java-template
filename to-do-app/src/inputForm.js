import React from 'react';

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
    this.changeHandler = (event) => {
      this.setState({text: event.target.value});
    }
    this.clickHandler = (event) => {
      event.preventDefault();
      alert(this.state.text);
      this.setState({text: ''});
    }
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.text} onChange={this.changeHandler}/>
        <button onClick={this.clickHandler}>Submit</button>
      </div>)
  }
}

export default InputForm;
