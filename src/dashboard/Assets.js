import React from 'react'
import { Row, Col } from "react-bootstrap"

import {Circledot} from '../components/CommonTags.js'
import Ringchart from '../components/Ringchart.js'
import {MyIcon} from "../components/CommonTags.js"
import chartColors from "../components/Colors.js"

function Assets() {

    let tokens = [
        {id: "0", name: "Luna", amount: "200000"},
        {id: "1", name: "UST", amount: "500000"},
    ]

    let tokenList = tokens.map((token, index) => {
        return (
            <Row key={index} className="pb-2">
                <Col lg={3} xs={3} md={3} sm={4}>
                    <Circledot color={chartColors[token.id]} size="8px" className="col-8"/>
                    &nbsp;&nbsp;<span>{token.name}</span>
                </Col>
                <Col><MyIcon name={token.name.toLowerCase()} size={18} /></Col>
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