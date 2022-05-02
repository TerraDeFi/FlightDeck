import React from 'react';
import { Col } from 'react-bootstrap';

import Statusupdown from './Statusupdown';

const NFTcard = ({id, primary, current}) => {
    let luna = 100
    let luna_percent = (Number.parseFloat(current) - Number.parseFloat(primary)) / luna
    let luna_diff = ""
    if(luna_percent > 0) {
        luna_diff = <p className="text-secondary">{luna_percent} Luna</p>
    }
    const nftCardStyle = {
        backgroundColor: "#000111",
        borderRadius: "10px",
        fontSize: "18px",
        margin: "5px 10px",
        padding: "5px",
        height: "170px",
        width: "120px",
        textAlign: "center"
    }

    return (

        <Col xl={2} lg={3} md={3} sm={4} xs={4} style={nftCardStyle} key={id}>
            <img src={require("../img/nfts/"+id+".png")} width="110px" height="100px"></img>
            <p className="mb-1"><Statusupdown key={id} primary={primary} current={current} /></p>
            {luna_diff}
        </Col>
    );
}

export default NFTcard

