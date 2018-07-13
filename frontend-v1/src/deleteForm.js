import React from 'react';

class DeleteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {textboxText: ''};
    this.textboxHandleChange = (event) => {
      this.setState({textboxText: event.target.value});
    };
    this.deleteButtonHandleClick = (event) => {
      this.props.deleteFunction(this.state.textboxText);
      this.setState({textboxText: ''});
    };
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.textboxText} onChange={this.textboxHandleChange}/>
        <input type="submit" value="Delete Post By ID" onClick={this.deleteButtonHandleClick} />
      </div>
    )
  }
}

export default DeleteForm;
