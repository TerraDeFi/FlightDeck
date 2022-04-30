import React, { useState } from 'react';

const Panel = ({ name, height, component }) => {

    const [ style, setStyle ] = useState({
        backgroundColor: "#1b1b1b",
        height: height,
    })

    return (
        <div style={style} className="text-white rounded-10" >
            {component}
        </div>
    );
} 

export default Panel;