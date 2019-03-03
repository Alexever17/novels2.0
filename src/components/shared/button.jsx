import React from 'react';

//this gets updates once setState is triggered in app.js
const Button = ({ classname, text, onclick }) => {
    console.log(text);
    
    if (onclick) {
        return (<button className={classname} onClick={onclick}>{text}</button>)
    } else {
        return (<button className={classname}>{text}</button>)
    }
}

export default Button;