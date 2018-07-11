import React from 'react';
import $ from 'axios';
import InputForm from './inputForm';
import Posts from './posts';

// $.defaults.headers.post['Content-Type'] = 'application/json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.domain = 'http://192.168.48.112';
    this.port = '3000';
    this.user_id = '1001';
    this.state = {posts: []};
    this.refreshPosts = () => {
      $.get(`${this.domain}:${this.port}/users/${this.user_id}/posts/`)
        .then(rawResponse => rawResponse.data)
        .then(posts => posts.map(post => post.post_text))
        .then(postStrings => {
          this.setState({posts: postStrings})
        });
      // $.get(`${this.domain}:${this.port}/users`)
      //   .then(rawResponse => rawResponse.data)
      //   .then(people => {
      //     return people.map(person => person.handle);
      //   })
      //   .then(peopleNames => {
      //     this.setState({posts: peopleNames});
      //   });
    };
    this.makePost = (postText) => {
      console.log(postText);
      console.log(this.user_id);
      $.post(`${this.domain}:${this.port}/users/${this.user_id}/posts/`, {"post_text": postText}, {headers: {'Content-Type': 'applications/json'}});
      alert(`Your post "${postText}" has been made.`);
      this.forceUpdate();
    }
  }

  componentDidMount() {
    this.refreshPosts();
  }

  render() {
    return (
     <div>
       <InputForm postFunction={this.makePost} />
       <Posts names={this.state.posts} />
     </div>
    )
  }
}

export default App;
