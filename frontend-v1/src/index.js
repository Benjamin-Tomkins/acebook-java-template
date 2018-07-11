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

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {textboxText: ''};
    this.textboxHandleChange = (event) => {
      this.setState({textboxText: event.target.value});
    };
    this.postButtonHandleClick = (event) => {
      alert(`Your post "${this.state.textboxText}" has been made.`);
      this.setState({textboxText: ''});
    };
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.textboxText} onChange={this.textboxHandleChange}/>
        <input type="submit" onClick={this.postButtonHandleClick} />
      </div>
    )
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
    return (
     <div>
       <InputForm />
       <Posts names={this.state.posts} />
     </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
