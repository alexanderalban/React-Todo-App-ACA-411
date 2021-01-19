import React, { Component } from 'react';
import TodoCard from './TodoCard';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './firstComponent';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      input: '',
      items: [],
      isClicked: false
    }
  }

  inputUpdate = (event) => {
    this.setState({input: event.target.value})
  }

  formSubmit = event => {
    event.preventDefault()
    console.log("THIS IS STATE", this.state.items)
    this.setState({
      items : [...this.state.items, this.state.input],
      input: ''
    })
  }

  toggle = () => {
    this.setState({isClicked: !this.state.isClicked})
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={this.formSubmit}>
          <input value={this.state.input} onChange={this.inputUpdate}></input>
          <button>Submit</button>
        </form>
        <button onClick={this.toggle}>{this.state.isClicked ? 'On' : 'Off'}</button>
      <FirstComponent items={this.state.items}></FirstComponent>
      </header>
    </div>
  );
  }
}

export default App;