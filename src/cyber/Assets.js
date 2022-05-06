import React from 'react'
import { Row, Col } from "react-bootstrap"

import {Circledot} from '../components/CommonTags.js'
import Piechart from '../components/Piechart'
import {MyIcon} from "../components/CommonTags.js"
import Colors from "../components/Colors.js"

const Assets = () => {

    const data = [
        {id: "0", name: "Wallet", amount: 177513.99},
        {id: "1", name: "Nexus", amount: 177513.99},
        {id: "2", name: "Valkyrie", amount: 177513.99},
        {id: "3", name: "Pylon", amount: 177513.99},
        {id: "4", name: "Others", amount: 177513.99},
    ]

    let tokenList = data.map((token, index) => {
        return (
            <Row key={index} className="pb-2 p-0 text-gray">
                <Col lg={3} xs={3} md={3} sm={4} className="fw-bold d-flex p-0">
                    <MyIcon 
                        style={{position: "relative", top: "3px"}}
                        name={token.name.toLowerCase()}
                        size={18}/>
                    &nbsp;&nbsp;<span className="p-0" style={{position: "relative", top: "-3px"}}>{token.name}</span>
                </Col>                    
                <p className="m-0 ps-4 p-0 fw-bold text-secondary">${token.amount}</p>
            </Row>
        );
    })

    return (
        <Row className="pt-3 ps-2">
            <Col xs={4}>{tokenList}</Col>
            <Col xs={8}><Piechart data={data}/></Col>
        </Row>
    );
}

export default Assets;