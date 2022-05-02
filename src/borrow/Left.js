import React from 'react'
import {Container, Row, Col, ProgressBar} from 'react-bootstrap'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {ImSwitch} from 'react-icons/im'

import Progressbar from '../components/Bar.js'
import Panel from '../components/Panel.js'
import Bar from '../components/Bar.js'
import { MiniButton, TokenCombo, MyIcon } from '../components/CommonTags.js'

const priceStyle = {
    margin: "0",
    textAlign: "right",
    fontWeight: "700",
    color: "#3DB6DA",
    fontSize: "20px",
    height: "23px",
    position: "relative",
    top: "-5px"
}

const infoStyle = {
    fontWeight: "900",
    textAlign: "right",
    color: "#8F8F8F",
    margin: 0,
    fontSize: "12px"
}

const partStyle = {
    fontWeight: "900",
    color: "#868686"
}
const titlefont = {
    color: "#CECECE",
    fontSize: "20px",
    fontWeight: "900",
}
const etcInfoStyle = {
    display: "flex",
    color: "#CECECE",
    fontSize: "16px",
    fontWeight: "700",
    justifyContent: "space-between",
    marginTop: "30px",
}
const myButton = {
    backgroundColor: "#C63399",
    border: 0,
    borderRadius: "15px",
    fontSize: "25px",
    fontWeight: "700",
    height: "60px",
    marginBottom:"20px",
    marginTop: "30px", 
    width: "100%",

}
const coinStyle = {
    position: "relative",
    top: "-5px",
    fontWeight: "900",
    margin: "5px",
}

const ust = (
    <div>
        <Container className="p-1 d-flex flex-row">
            <div  className="pe-2 ps-2 pt-1 bg-dark rounded-top-left-5 col-5 me-1" style={{height: "45px", minWidth: "130px"}}>
                <TokenCombo name="UST" />
            </div>
            <div className="col bg-dark rounded-top-right-5" style={{height: "45px"}}>
                <div className="d-flex justify-content-between">
                    <MiniButton txt="25%" />
                    <MiniButton txt="50%" />
                    <MiniButton txt="75%" />
                    <MiniButton txt="Max" />
                </div>
                <p style={infoStyle} className="pe-1">Balance: 3601.56</p>
            </div>
        </Container>
        <div>
            <p style={priceStyle} className="pe-3">1000</p>
            <p style={infoStyle} className="pe-3">-1000 UST</p>
        </div>
    </div>
)

const collateral = (
    <Container className="p-1 d-flex justify-content-between">
        <div  className="col-5 pe-2 ps-2 pt-1 bg-dark rounded-top-left-5 me-1" style={{height: "45px", minWidth: "135px"}}>
            <TokenCombo name="BLUNA" />
        </div>
        <div>
            <p style={priceStyle} className="pe-3">8.84915</p>
            <p style={infoStyle} className="pe-3">-1000 UST</p>
        </div>
    </Container>
)

const borrow = (
    <div>
        <Container className="p-1 d-flex flex-row">
            <div  className="pe-2 ps-2 pt-1 bg-dark rounded-top-left-5 col-5 me-1" style={{height: "45px", minWidth: "130px"}}>
                <TokenCombo name="LOOP" />
            </div>
            <div className="col bg-dark rounded-top-right-5" style={{height: "45px"}}>
                <p style={infoStyle} className="pe-1">New Balance</p>
                <p style={infoStyle} className="pe-1">277302.39</p>
            </div>
        </Container>
        <div>
            <p style={priceStyle} className="pe-3">10782.997191</p>
            <p style={infoStyle} className="pe-3">-899.684</p>
        </div>
    </div>
)

const Left = () => {
    return (
        <div className="p-4 left justify-content-between">
            <p className="d-flex justify-content-between m-2"><span style={titlefont} className="h4 font-weight-bold">Borrow</span><span style={{fontWeight: "900", color: "#6C757D"}}> Slippage<span className="bg-black ms-1">&nbsp;&nbsp; 5% </span></span></p>
            <p className="text-secondary mb-1 ms-2">Swap Asset<ImSwitch className="ms-2"/></p>
            <Panel bg="#111111" height="100px" component={ust} />
            <p className="text-secondary ms-2 mb-1 mt-3">To Collateral<ImSwitch className="ms-2"/></p>
            <Panel bg="#111111" height="53px" component={collateral} />
            <div className="d-flex justify-content-between">
                <p className="text-secondary ms-2 mb-1 mt-3">Total Borrow Usage<ImSwitch className="ms-2"/></p>
                <div className="d-flex justify-content-between pt-3">
                    <MiniButton txt="25%" />
                    <MiniButton txt="50%" />
                    <MiniButton txt="75%" />
                </div>
            </div>
            <Progressbar bgcolor="#40FD9C" progress='75'  height={20} />
            <p className="text-secondary ms-2 mb-1 mt-3">Borrow</p>
            <Panel bg="#111111" height="100px" component={borrow} />
            <div style={etcInfoStyle}>
                <span>Full Degen Mode<AiOutlineInfoCircle className="ms-2"/></span>
                <span>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    </div>
                </span>
            </div>
            <div style={etcInfoStyle} >
                <span>Loophole Factor<AiOutlineInfoCircle className="ms-2"/></span>
                <span>1</span>
            </div>
            <div style={etcInfoStyle} >
                <span>Fee<AiOutlineInfoCircle className="ms-2"/></span>
                <span>0.1%</span>
            </div>
            <div style={etcInfoStyle} >
                <span>Price Impact<AiOutlineInfoCircle className="ms-2"/></span>
                <span>0.083435</span>
            </div>
            <button style={myButton}><span style={coinStyle}><MyIcon name="coinonhand" size={25} /></span>Borrow</button>
        </div>
    )
}

export default Left