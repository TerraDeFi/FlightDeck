import React from 'react';
import {Row, Col} from "react-bootstrap"

import {Statusupdown} from '../components/CommonTags.js'

let data = [
    {id: "0", name: "Levana", amount: "25000", primary: "21000"},
    {id: "1", name: "Mirror", amount: "27000", primary:"22000"},
    {id: "2", name: "Mars", amount: "31000", primary: "25000"},
    {id: "3", name: "Anchor", amount: "100000", primary: "81000"},
]

let pools = data.map((pool, index) => {
    return(
        <Row key={pool.id}>
            <Col><h5 style={{color: "#DADADA"}}>{pool.name}</h5><p style={{color: "#A5A5A5"}}>${pool.amount}</p></Col>
            <Col className="text-end"><Statusupdown primary={pool.primary} current={pool.amount} /></Col>
        </Row>
    )
})

function Pools() {
    return (
        <div>
            {pools}
        </div>
    );
} 

export default Pools;