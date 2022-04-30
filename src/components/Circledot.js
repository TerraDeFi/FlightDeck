import React, { useState } from 'react';

const Circledot = ({ color, size }) => {
    const [dotStyle, setStyle] = useState({
        position: "relative",
        top: "-2px",
        fontSize: size,
        borderRadius: "50%",
        backgroundColor: color
    });

    return (<span style={dotStyle}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>);
}

export default Circledot;