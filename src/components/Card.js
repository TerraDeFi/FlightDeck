/**
 * 
 * This is component for type of card panel.
 * This use to individual panels of Dashboard page.
 * 
 * @data 2022-04-29 
 * @author Monte Carlo
 * @license 
 * @github
 * @param name Title of panel           <h4>{name}</h4>
 * @param height Height of panel        height: height
 * @param element Content of panel      {element}
 * 
 */

import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io'
import {Col} from 'react-bootstrap'

const Card = ({ name, sort, theme, element }) => {

    let bgColor = ""
    let headBgColor = ""
    let headfontColor = ""

    if (theme == "white") {
        bgColor = "white"
        headBgColor = "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(216,216,222,1) 100%)"
        headfontColor = "black"
    } else if(theme == "black"){
        bgColor = "#111111"
        headBgColor = "#000000"
        headfontColor = "White"
    }

    let sortLabels ;
    if(sort) {
        sortLabels = sort.map((str, index) => {
            return <p 
                key={index}
                className="sub-info ps-2 pt-2 m-0 border-0"
                style={{cursor: "pointer"}}>
                    {str}&nbsp;<IoIosArrowDown />
                </p>
        })
    }

    const style = {
        backgroundColor: bgColor,
    }

    const headStyle= {
        background: headBgColor,
        color: headfontColor
    }


    return (
        <div style={style} className="mt-2 mb-0 p-0 rounded-10" >
            <div style={headStyle} className="alert rounded-10 mb-0 fw-bold d-flex" role="alert">
                <span className="fs-4">{name}</span>&nbsp;
                {sortLabels}
            </div>
            <div className="mb-1 p-3">
                {element}
            </div>
        </div>
    );
} 

export default Card;