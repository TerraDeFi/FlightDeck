import React from 'react';
import { Col } from 'react-bootstrap';

import Statusupdown from './Statusupdown';

const NFTcard = ({id, primary, current}) => {

    const nftCardStyle = {
        backgroundColor: "#000000",
        borderRadius: "10px",
        fontSize: "18px",
        margin: "10px 20px",
        padding: "7px",
        height: "150px",
        width: "110px",
        textAlign: "center"
    }
    return (

        <Col xl={2} lg={3} md={3} sm={4} xs={4} style={nftCardStyle} key={id}>
            <img src={require("../img/nfts/"+id+".png")}></img>
            <p><Statusupdown key={id} primary={primary} current={current} /></p>
        </Col>
    );
}

export default NFTcard

