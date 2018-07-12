import React from 'react';
import $ from 'axios';
import InputForm from './inputForm';
import Posts from './posts';
import Post from './post';

// $.defaults.headers.post['Content-Type'] = 'application/json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.domain = 'http://192.168.48.140';
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
    this.deletePost = (postID) => {
      alert("I have been clicked!");
      $.delete(`${this.domain}:${this.port}/users/${this.user_id}/posts/${postID}`)
        .then(() => {
          alert(`Your post has been deleted! Be happy!`);
          this.refreshPosts();
        });
    }
  }

  componentDidMount() {
    this.refreshPosts();
  }

  render() {
    return (
     <div>
       <h1>Virtual Angus</h1>
       <InputForm postFunction={this.makePost} />
       <Posts postsArray={this.state.posts} deleteButtonHandleClick={this.deletePost} postToDelete={this.postToDelete}/>
     </div>
    )
  }
}

export default App;
