import React from 'react'
import {Container, Row, Col, ProgressBar} from 'react-bootstrap'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {ImSwitch} from 'react-icons/im'
import {BsArrowDownCircle} from 'react-icons/bs'

import Progressbar from '../components/Bar.js'
import Panel from '../components/Panel.js'
import Bar from '../components/Bar.js'
import { 
    MiniButton,
    TokenCombo,
    MyIcon 
} from '../components/CommonTags.js'
import { 
    priceStyle,
    infoStyle,
    titleStyle,
    titleFont,
    etcInfoStyle,
    myButton,
    coinStyle,
    arrowDownStyle,
} from "./commonStyle.js"

const ust = (
    <div>
        <Container className="p-1 d-flex flex-row">
            <div className="pe-2 ps-2 pt-1 bg-dark rounded-top-left-5 col-5 me-1" style={{height: "45px", minWidth: "130px"}}>
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
        <Container className="p-1">
            <p style={priceStyle} className="pe-3">8900</p>
            <p style={infoStyle} className="pe-3">-8900 UST</p>
        </Container>
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
        <Container className="p-1" >
            <p style={priceStyle} className="pe-3">10782.997191</p>
            <p style={infoStyle} className="pe-3">-899.684</p>
        </Container>
    </div>
)

const Left = () => {
    return (
        <div className="p-4 left justify-content-between">
            <p className="d-flex justify-content-between m-2"><span style={titleFont} className="h4 font-weight-bold">Borrow</span><span style={{fontWeight: "900", color: "#6C757D"}}> Slippage<span className="bg-black ms-1">&nbsp;&nbsp; 5% </span></span></p>
            
            <p style={titleStyle}>Swap Asset <ImSwitch className="mb-1" size={10}/></p>
            <Panel bg="#111111" height="100px" component={ust} />
            
            <p style={arrowDownStyle}><BsArrowDownCircle size={35}/></p>
            <div style={{position: "relative", top: "-30px", height: "10px"}}>
                <p style={titleStyle}>To Collateral <ImSwitch className="mb-1" size={10} /></p>
            </div>
            <Panel bg="#111111" height="53px" component={collateral} />

            <p style={arrowDownStyle}><BsArrowDownCircle size={35}/></p>
            <div style={{position: "relative", top: "-20px", height: "10px"}} className="d-flex justify-content-between">
                <p style={titleStyle}>Total Borrow Usage</p>
                <div className="d-flex justify-content-between">
                    <MiniButton txt="25%" />
                    <MiniButton txt="50%" />
                    <MiniButton txt="75%" />
                </div>
            </div>
            
            <Progressbar bgcolor="#40FD9C" progress='75'  height={15} />

            {/* <p style={titleStyle}>Borrow <ImSwitch className="mb-1" size={10} /></p>
            <Panel bg="#111111" height="100px" component={borrow} /> */}

            {/* <div style={etcInfoStyle}>
                <span>Full Degen Mode <AiOutlineInfoCircle size={10} /></span>
                <span>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    </div>
                </span>
            </div>
            
            <div style={etcInfoStyle} >
                <span>Loophole Factor <AiOutlineInfoCircle size={10} /></span>
                <span>1</span>
            </div> */}
            <div style={etcInfoStyle} >
                <span>Fee <AiOutlineInfoCircle size={10} /></span>
                <span>0.1%</span>
            </div>
            <div style={etcInfoStyle} >
                <span>Price Impact <AiOutlineInfoCircle size={10} /></span>
                <span>0.083435</span>
            </div>
            <button style={myButton}><span style={coinStyle}><MyIcon name="borrow" size={25} /></span>Borrow</button>
        </div>
    )
}

export default Left