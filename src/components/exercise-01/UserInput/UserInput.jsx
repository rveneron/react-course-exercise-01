import React from 'react'

const userInput = (props) => {
    const inputStyle = {
        border: '2px solid blue'
    };
    return (
        <div>
            <label htmlFor="username">Username: </label>
            <input type="text" name="username"
                   style={inputStyle}
                   onChange={props.changed}
                   value={props.currentValue}/>
        </div>
    );
}

export default userInput;
