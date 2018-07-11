import React from 'react';

class Posts extends React.Component {
  constructor(props) {
    super(props)
    this.renderPosts = () => {
      return this.props.names.map((name, index) => {
        return <li key={index}>{name}</li>
      });
    }
  }
  render() {
    return <ul>{this.renderPosts()}</ul>
  }
}

export default Posts;
