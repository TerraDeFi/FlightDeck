import React, { useEffect, useState } from 'react';
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

const Statusupdown = ({ id, primary, current }) => {

    const [upDown, setUpDown] = useState(0);
    const [percent, setPercent] = useState(0);
    let float_percent = Number.parseFloat(current) / Number.parseFloat(primary) * 100 -100;
    useEffect(() => {
        setPercent(Number.parseInt(float_percent));
        if (percent < 0){
            setUpDown(-1);
        } else if(percent > 0){
            setUpDown(1);
        } else {
            setUpDown(0);
        }
    }, [])
    
    return ( 
        upDown >  0 ? (<span style={{marginLeft: '3px', color: "#2FDE00"}}><BsArrowUp />{percent}%</span>) : (<span style={{marginLeft: '3px', color: "red"}}></span>) 
    )
}

export default Statusupdown;