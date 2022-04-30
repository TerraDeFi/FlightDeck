import React from 'react'
import Icon from "react-crypto-icons"
import { Row, Col } from "react-bootstrap"

import Circledot from '../components/Circledot.js'
import Ringchart from '../components/Ringchart.js'

function Assets() {

    let tokens = [
        {id: "0", name: "Luna", amount: "200000"},
        {id: "1", name: "UST", amount: "500000"},
    ]

    let tokenList = tokens.map((token, index) => {
        return (
            <Row key={index} className="pb-2">
                <Col lg={8} xs={8}>
                    <Circledot color="#0dcaf0" size="8px" className="col-8"/>
                    &nbsp;&nbsp;<span>{token.name}</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;<Icon name={token.name} size={18} className="col-4" />
                </Col>
                <Col lg={4} xs={4} className="ps-0 text-end">
                    <span>${token.amount}</span>
                </Col>
            </Row>
        );
    })

    return (
        <div>
            {tokenList}
            <Ringchart />
        </div>
    );
}

export default Assets;