import React, {Component} from 'react';
import Exercise01 from './Exercise01'
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class Solution01 extends Component {

    state = {
        username: "rvenero"
    }

    usernameChangeHandler = (event) => {
        this.setState({username: event.target.value})
    }

    render() {
        const solutionMargin = {
            marginLeft: '16px',
            textAlign: 'left',
            color: 'darkblue'
        };
        return (
            <div className="App">
                <hr/>
                <Exercise01/>
                <h2 style={solutionMargin}>Solución</h2>
                <UserInput changed={this.usernameChangeHandler} currentValue={this.state.username}/>
                <UserOutput username={this.state.username}/>
                <UserOutput username={this.state.username}/>
                <UserOutput username={'Pepe'}/>
            </div>
        );
    }
}

export default Solution01
