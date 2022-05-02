import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import Panel from '../components/Panel.js'
// import MiniButton from '../components/MiniButton.js'
import { MiniButton, TokenCombo, MyIcon } from '../components/CommonTags.js'


const UST = (
    <Container className="p-1 d-flex flex-row">
        <div  className="p-2 bg-dark rounded-top-left-5 col-5 me-1" style={{height: "45px"}}>
            <TokenCombo name="UST" />
        </div>
        <div className="col bg-dark rounded-top-right-5" style={{height: "45px"}}>
            <div className="d-flex justify-content-between">
                <MiniButton txt="25%" />
                <MiniButton txt="50%" />
                <MiniButton txt="75%" />
                <MiniButton txt="Max" />
            </div>
            <p className="font-weight-bold text-end pe-1 text-secondary">Balance: 3601.56</p>
        </div>


    </Container>

)

const Left = () => {
    return (
        <div className="p-4 left">
            <p className="d-flex justify-content-between m-0"><span className="h4 font-weight-bold">Borrow</span><span className="text-muted font-weight-bold "> Slippage<span className="bg-black">&nbsp;&nbsp; 5% </span></span></p>
            <p className="text-secondary mb-1">Swap Asset</p>
            <Panel bg="#000000" height="100px" component={UST} />
        </div>
    )
    


}

export default Left