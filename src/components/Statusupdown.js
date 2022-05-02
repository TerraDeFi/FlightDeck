import React, { useEffect, useState } from 'react';
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

const Statusupdown = ({ id, primary, current }) => {
    const percent = (Number.parseFloat(current) / Number.parseFloat(primary) * 100 -100).toFixed(1);
    // const [upDown, setUpDown] = useState(1);
    // const [percent, setPercent] = useState(percentage);
    // console.log(primary+":"+current);
    // useEffect(() => {
        // console.log(percent);
        // if(percent > 0){
            // upDown = 1
            // setPercent(percentage)
            // setUpDown(1);
        // } else {
            // setPercent(percentage)
            // setUpDown(0);
        // }
    // }, [])
    return (
        percent >  0 ? (<span style={{marginLeft: '3px', color: "#2FDE00"}}><BsArrowUp />{percent}%</span>) : (<span style={{marginLeft: '3px', color: 'dark'}}></span>)
    )
}

export default Statusupdown;