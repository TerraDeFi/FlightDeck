import React, { useEffect, useState } from 'react';
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

const Statusupdown = ({ id, primary, current }) => {

    const [upDown, setUpDown] = useState(1);
    const [percent, setPercent] = useState(Number.parseInt(Number.parseFloat(current) / Number.parseFloat(primary) * 100 -100));
    
    useEffect(() => {
        if(percent > 0){
            setUpDown(1);
        } else {
            setUpDown(0);
        }
    }, [])
    return (
        upDown >  0 ? (<span style={{marginLeft: '3px', color: "#2FDE00"}}><BsArrowUp />{percent}%</span>) : (<span style={{marginLeft: '3px', color: 'dark'}}></span>)
    )
}

export default Statusupdown;