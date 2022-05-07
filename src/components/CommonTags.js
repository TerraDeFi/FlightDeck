import React, { useState} from 'react'
// import fs from 'fs'
import { BsFillCaretDownFill, BsArrowUp, BsArrowDown } from "react-icons/bs";

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

export const MiniButton = ({txt}) => {
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
    return (
        <button style={miniButtonStyle}>
            {txt}
        </button>
    )
}

export const MyIcon = ({name, size}) => {
    try{
        const path = "../img/"+name.toLowerCase()+".png"
        return <img src={require("../img/"+name.toLowerCase()+".png")} width={size} height={size}></img>
    }
    catch(err){
        //Do whatever you want when the image failed to load here
        return ""
    }

}

export const TokenCombo = ({name}) => {
    const comboStyle = {
        color: "#D5D1D0",
        display: "flex",
        fontWeight: "700",
        fontSize: "18px",
        justifyContent: "between",
        fontWeight: "900",
    }
    return (
        <div style={comboStyle} className="d-flex justify-content-between align-items-center">
            <span><MyIcon name={name.toLowerCase()} size="30"/><span className="ps-1">{name}</span></span>
            <span><BsFillCaretDownFill /></span>
        </div>
    )  
}

export const Statusupdown = ({ primary, current, down }) => {
    const percent = (Number.parseFloat(current) / Number.parseFloat(primary) * 100 -100).toFixed(1);
    let downIcon = ""

    if(down == "show") {
        downIcon = (<BsArrowUp />+percent + "%")
    }

    return ( percent >  0 ? 
          (<span style={{marginLeft: '3px', color: "#2FDE00"}}><BsArrowUp />{percent}%</span>)
        : (<span style={{marginLeft: '3px', color: 'red'}}><BsArrowDown />{percent}%</span>)
    )
}

export const Value = ({size, color, value, type}) => {
    const style = {
        color: color,
        fontSize: size,
        fontWeight: 700,
        marginLeft: "7px",
    }
    
    if(type == "percent") {
        return <span style={style}>{value} %</span>
    } else if(type == "dolar")  {
        return <span style={style}> $ {value}</span>
    }
}