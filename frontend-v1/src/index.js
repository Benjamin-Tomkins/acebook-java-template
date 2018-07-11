import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'axios';

class HelloKay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {response: 'nothing has been fetched yet'};
  }

  componentDidMount() {
    $.get('https://chitter-backend-api.herokuapp.com/users')
      .then((response) => {
        this.setState({response: JSON.stringify(response)});
      });
  }

  render() {
    return <h1>{this.state.response}</h1>
  }
}

ReactDOM.render(<HelloKay />, document.getElementById('root'));
