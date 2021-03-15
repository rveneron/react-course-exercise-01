import React from 'react'
import "./UserOutput.css"

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Username: {props.username}</p>
            <p>Example Test of Paragraph</p>
        </div>
    );
}

export default userOutput;
