import React from 'react'
import { Row, Col } from "react-bootstrap"

import {Circledot} from '../components/CommonTags.js'
import Ringchart from '../components/Ringchart.js'
import Colors from "../components/Colors.js"

const Exposure = () => {

    const data = [
        {id: "0", name: "Luna", amount: 235.03},
        {id: "1", name: "UST", amount: 42.8718},
        {id: "2", name: "Bluna", amount: 177.51399},
        {id: "3", name: "aUST", amount: 200.00},
        {id: "4", name: "Others", amount: 18.981},
    ]

    let tokenList = data.map((token, index) => {
        return (
            <Row key={index} className="pb-2 text-gray">
                <Col lg={3} xs={3} md={3} sm={4} className="fw-bold">
                    <Circledot color={Colors.Purple[token.id]} size="8px" className="col-8"/>
                    &nbsp;&nbsp;<span>{token.name}</span>
                </Col>                    
                <p className="m-0 ps-4 fw-bold text-secondary">${token.amount}</p>
            </Row>
        );
    })

    return (
        <Row className="pt-3">
            <Col xs={4} className="m-0">{tokenList}</Col>
            <Col xs={8} className="m-0"><Ringchart data={data}/></Col>
        </Row>
    );
}

export default Exposure;