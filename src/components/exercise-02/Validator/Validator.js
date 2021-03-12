import React from 'react';

const validator = (props) => {
    let description;
    if (props.length > 5) {
        description = (<p>'Text long enough'</p>);
    } else {
        description = (<p>'Text too short'</p>);
    }
    return (description);
};

export default validator;
