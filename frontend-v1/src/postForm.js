import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {textboxText: ''};
    this.textboxHandleChange = (event) => {
      this.setState({textboxText: event.target.value});
    };
    this.postButtonHandleClick = (event) => {
      this.props.postFunction(this.state.textboxText);
      this.setState({textboxText: ''});
    };
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.textboxText} onChange={this.textboxHandleChange}/>
        <input type="submit" value="Create Post" onClick={this.postButtonHandleClick} />
      </div>
    )
  }
}

export default PostForm;
