import React from 'react';
import $ from 'axios';
import InputForm from './inputForm';
import Posts from './posts';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.domain = 'https://chitter-backend-api.herokuapp.com';
    this.port = '443';
    this.state = {posts: []};
    this.refreshPosts = () => {
      // $.get(`${this.domain}`:`${this.port}/users/99999999/posts/`)
      //   .then(rawResponse => rawResponse.data)
      //   .then(posts => posts.map(post => post.post_text))
      //   .then(postStrings => {
      //     this.setState({posts: postStrings})
      //   });
      $.get(`${this.domain}:${this.port}/users`)
        .then(rawResponse => rawResponse.data)
        .then(people => {
          return people.map(person => person.handle);
        })
        .then(peopleNames => {
          this.setState({posts: peopleNames});
        });
    };
    this.makePost = (postText) => {
      // $.post(`${this.domain}`:`${this.port}/users/99999999/posts/`, JSON.stringify(postText));
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
