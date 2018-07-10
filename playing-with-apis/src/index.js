import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {text: "nothing has been fetched yet" }
  }
  componentDidMount() {
    $.get("https://chitter-backend-api.herokuapp.com/users", (response) => {
      let kay = response[0].handle
      this.setState({text: kay})
    })
  }
  render() {
    return <h1> {this.state.text} </h1>
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
