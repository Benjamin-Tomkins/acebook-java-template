import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.domain = 'https://chitter-backend-api.herokuapp.com';
    this.port = '443';
    this.state = {posts: 'nothing has been fetched yet'};
  }

  componentDidMount() {
    $.get(`${this.domain}:${this.port}/users`)
      .then(rawResponse => rawResponse.data)
      .then(people => {
        return people.map(person => person.handle);
      })
      .then(peopleNames => {
        this.setState({posts: JSON.stringify(peopleNames)});
      });
  }

  render() {
    return <h1>{this.state.posts}</h1>
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
