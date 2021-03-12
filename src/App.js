import React, { Component } from 'react';
import './App.css';

import UserInput from './components/UserInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';

class App extends Component {

  state = {
    username: "rvenero"
  }

  usernameChangeHandler = (event) => {
    this.setState({username: event.target.value})
  }

  render() {
    return (
        <div className="App">
            <UserInput changed={this.usernameChangeHandler} currentValue={this.state.username}/>
            <UserOutput username={this.state.username}/>
            <UserOutput username={this.state.username}/>
            <UserOutput username={'Pepe'}/>
        </div>
    );
  }
}

export default App;
