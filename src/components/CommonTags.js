import React, { useState} from 'react'
import { BsFillCaretDownFill, BsArrowUp } from "react-icons/bs";

const comboStyle = {
    display: "flex",
    justify: "between",
    fontWeight: "700"
}

export const TokenCombo = ({name}) => {
    return (
        <div style={comboStyle} className="d-flex justify-content-between">
            <span><MyIcon name={name.toLowerCase()} size="25"/>{name}</span>
            <span><BsFillCaretDownFill /></span>
        </div>
    )  
}

const style={
    backgroundColor: "#2D2D2D",
    fontSize: "11px",
    color: "#848E9B",
    borderRadius: "5px",
    padding: "0px 5px",
    margin: "2px",
    height: "20px",
    fontWeight: "900",
    width: "25%",
    textAlign: "center",
    border: 0
}

export const MiniButton = ({txt}) => {
    return (
        <button style={style}>
            {txt}
        </button>
    )
}

export const MyIcon = ({name, size}) => {
    return <img src={require("../img/"+name+".png")} width={size} height={size}></img>
}

export const Statusupdown = ({ id, primary, current }) => {
    const percent = (Number.parseFloat(current) / Number.parseFloat(primary) * 100 -100).toFixed(1);
    return ( percent >  0 ? (<span style={{marginLeft: '3px', color: "#2FDE00"}}><BsArrowUp />{percent}%</span>) : (<span style={{marginLeft: '3px', color: 'dark'}}></span>)
    )
}

export const Circledot = ({ color, size }) => {
    const dotStyle = {
        position: "relative",
        top: "-2px",
        fontSize: size,
        borderRadius: "50%",
        backgroundColor: color
    };

    return (<span style={dotStyle}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>);
}