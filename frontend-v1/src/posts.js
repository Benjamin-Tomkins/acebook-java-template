import React from 'react';

class Posts extends React.Component {
  constructor(props) {
    super(props)
    this.renderPosts = () => {
      return this.props.postsArray.reverse().map((post) => {
        return <li key={post.id}>{post.post_text}</li>
      });
    }
  }
  render() {
    return (
      <ul>
        {this.renderPosts()}
      </ul>
    )
  }
}

export default Posts;
