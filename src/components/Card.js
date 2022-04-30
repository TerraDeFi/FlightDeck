import React, { useState } from 'react';

const Card = ({ name, height, component }) => {

    const [ style, setStyle ] = useState({
        backgroundColor: "#111111",
        height: height,
    })

    return (
        <div style={style} className="mt-2 mb-4 p-0 text-white rounded-10" >
            <div className="alert bg-black rounded-10" role="alert">
                <h4>{name}</h4>
            </div>
            <div className="mb-1 p-3">
                {component}
            </div>
        </div>
    );
} 

export default Card;