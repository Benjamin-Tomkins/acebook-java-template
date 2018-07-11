import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'axios';

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.domain = 'https://chitter-backend-api.herokuapp.com';
    this.port = '443';
    this.state = {posts: []};
  }

  componentDidMount() {
    $.get(`${this.domain}:${this.port}/users`)
      .then(rawResponse => rawResponse.data)
      .then(people => {
        return people.map(person => person.handle);
      })
      .then(peopleNames => {
        this.setState({posts: peopleNames});
      });
  }

  render() {
    return <Posts names={this.state.posts} />
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
