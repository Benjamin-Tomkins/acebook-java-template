import React from 'react';
import $ from 'axios';
import PostForm from './postForm';
import DeleteForm from './deleteForm';
import Posts from './posts';
import Post from './post';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.domain = 'http://192.168.48.135';
    this.port = '3000';
    this.user_id = '1001';
    this.postToDelete = null;
    this.state = {posts: []};
    this.refreshPosts = () => {
      $.get(`${this.domain}:${this.port}/users/${this.user_id}/posts/`)
        .then(rawResponse => rawResponse.data)
        .then(postJSONs => postJSONs.map(postJSON => {
          return new Post(postJSON.id, postJSON.post_text, postJSON.created)
        }))
        .then(postObjects => {
          this.setState({posts: postObjects})
        })
    }
    this.makePost = (postText) => {
      $.post(`${this.domain}:${this.port}/users/${this.user_id}/posts/`, {"post_text": postText}, {headers: {'Content-Type': 'application/json'}})
        .then(() => {
          alert(`Your post "${postText}" has been made.`);
          this.refreshPosts()
        });
    }
    this.deletePost = (postIdToDelete) => {
      let postIDs = this.state.posts.map(post => post.id.toString());
      if (postIDs.includes(postIdToDelete)) {
        $.delete(`${this.domain}:${this.port}/users/${this.user_id}/posts/${postIdToDelete}`, {headers: {"Content-Type": "application/json"}})
          .then(() => {
            alert(`Your post has been deleted! Be happy!`);
            this.refreshPosts();
          });
      }
    }
  }

  componentDidMount() {
    this.refreshPosts();
  }

  render() {
    return (
     <div>
       <h1>Virtual Angus</h1>
       <PostForm postFunction={this.makePost} />
       <DeleteForm deleteFunction={this.deletePost} />
       <Posts postsArray={this.state.posts}/>
     </div>
    )
  }
}

export default App;
