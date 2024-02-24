import React, { useState } from 'react';

const EightBall = ({ answers }) => {
    // Initialize message state with the default message
    const [message, setMessage] = useState('Think of a Question');
    const [color, setColor] = useState('black');

    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * answers.length);
        const { msg, color } = answers[randomIndex];

        console.log("New message:", msg);
        console.log("New color:", color);

        setMessage(msg);
        setColor(color);
    };

    return (
        <div
            className="eight-ball"
            style={{ backgroundColor: color }}
            onClick={handleClick}
        >
            {/* Display the message only if it's not empty */}
            {message && (
                <div className="message-circle" style={{ backgroundColor: color }}>
                    <p>{message}</p>
                </div>
            )}
        </div>
    );
};

export default EightBall;
