import React from 'react';

class Posts extends React.Component {
  constructor(props) {
    super(props)
    this.renderPosts = () => {
      return this.props.postsArray.reverse().map((post) => {
        return (
          <li key={post.id}>
            <p>{post.post_text}</p>
            <p>Time created in ms since 1st Jan, 1970: {Date.parse(post.created)}</p>
            <p>post id: {post.id}</p>
          </li>
        )
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
