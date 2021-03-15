import React, { Component } from 'react';
import Exercise02 from "../exercise-02/Exercise02";
import Char from './Char/Char'
import Validator from './Validator/Validator'

class Solution02 extends Component {
    state = {
        text: ''
    }

    inputValueChangedHandler = (event) => {
        this.setState({
            text: event.target.value,
        });
    };

    deleteCharacter = (event, index) => {
        const text = [...this.state.text];
        text.splice(index, 1);
        this.setState({text: text.join('')});
    };

    render() {
        const characters = this.state.text.split('').map((value, index) => {
            return <Char click={() => this.deleteCharacter(index)} key={index} character={value}/>
        });
        const solutionMargin = {
            marginLeft: '16px',
            textAlign: 'left',
            color: 'darkGray'
        };
        return (
            <div className="App">
                <hr/>
                <Exercise02/>
                <h2 style={solutionMargin}>Solución</h2>
                <input type="text" onChange={this.inputValueChangedHandler} value={this.state.text}/>
                <Validator length={this.state.text.length}/>
                <p>List of characters</p>
                <hr/>
                {characters}
            </div>
        );
    }
}

export default Solution02;
