import React from 'react';

import './Greeter.css';

const Greeter = ({whom, onClick}) => (
    <button className="myButton" onClick={() => onClick(whom)}>What's my name</button>
)

export default Greeter;