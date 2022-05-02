import React, { useState} from 'react'
import { BsFillCaretDownFill, BsArrowUp } from "react-icons/bs";

const comboStyle = {
    color: "#D5D1D0",
    display: "flex",
    fontWeight: "700",
    fontSize: "18px",
    justifyContent: "between",
    fontWeight: "900",
}

export const TokenCombo = ({name}) => {
    return (
        <div style={comboStyle} className="d-flex justify-content-between align-items-center">
            <span><MyIcon name={name.toLowerCase()} size="30"/><span className="ps-1">{name}</span></span>
            <span><BsFillCaretDownFill /></span>
        </div>
    )  
}

const miniButtonStyle={
    backgroundColor: "#2D2D2D",
    borderRadius: "5px",
    border: 0,
    color: "#848E9B",
    fontWeight: "900",
    fontSize: "13px",
    height: "20px",
    margin: "2px",
    minWidth: "40px",
    padding: "0px",
    textAlign: "center",
    width: "25%",
}

export const MiniButton = ({txt}) => {
    return (
        <button style={miniButtonStyle}>
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