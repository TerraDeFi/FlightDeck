import React from 'react'
import Colors from './Colors.js'

export const CoinInfoCard = ({ head, body }) => {

    const style = {
        backgroundColor: "#333333",
        borderRadius: "10px",
        margin: "10px",
        padding: 0,
        height: "150px",
    }

    const headStyle = {
        backgroundColor: "#292929",
        height: "75px",
    }

    return (
        <div style={style} >
            <div style={headStyle} className="rounded-top-10">
                {head}
            </div>
            <div className="ms-2">
                {body}
            </div>
        </div>
    );
} 

