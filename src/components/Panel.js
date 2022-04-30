import React, { useState } from 'react';

const Panel = ({ name, height, component }) => {

    const [ style, setStyle ] = useState({
        backgroundColor: "#111111",
        height: height,
    })

    return (
        <div style={style} className="ms-2 p-0 text-white rounded-10" >
            {component}
        </div>
    );
} 

export default Panel;