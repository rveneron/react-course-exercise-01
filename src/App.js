import React, {Component} from 'react';
import './App.css';
import Solution01 from "./components/exercise-01/Solution01";
import Solution02 from "./components/exercise-02/Solution02";
import {StyledLi} from "./components/global/global"


class App extends Component {

    state = {
        selectedExercise: null
    }

    showExerciseHandler = (number) => {
        let solution;
        if (number === 1)
            solution = <Solution01/>
        else if (number === 2)
            solution = <Solution02/>
        else solution = null;
        this.setState({selectedExercise: solution});
    };

    render() {
        return (
            <div>
                <h1>Ejercicios de React</h1>
                <hr/>
                <ol>
                    <StyledLi onClick={() => this.showExerciseHandler(1)}>01</StyledLi>
                    <StyledLi onClick={() => this.showExerciseHandler(2)}>02</StyledLi>
                </ol>
                {this.state.selectedExercise}
            </div>
        );
    }
}

export default App;
