import React from 'react'
import { Row, Col } from "react-bootstrap"

import Circledot from '../components/Circledot.js'
import Ringchart from '../components/Ringchart.js'
import Icon from "../components/Icon.js"
import chartColors from "../components/Colors.js"

function Assets() {

    let tokens = [
        {id: "0", name: "Luna", amount: "200000", icon: "luna" },
        {id: "1", name: "UST", amount: "500000", icon: "ust"},
    ]

    let tokenList = tokens.map((token, index) => {
        return (
            <Row key={index} className="pb-2">
                <Col lg={3} xs={3} md={3} sm={4}>
                    <Circledot color={chartColors[token.id]} size="8px" className="col-8"/>
                    &nbsp;&nbsp;<span>{token.name}</span>
                </Col>
                <Col><Icon name={token.icon} size={18} /></Col>
                <Col className="ps-0 text-end">
                    <span>${token.amount}</span>
                </Col>
            </Row>
        );
    })

    return (
        <div>
            {tokenList}
            <Ringchart data={tokens}/>
        </div>
    );
}

export default Assets;