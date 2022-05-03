import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AiOutlineInfoCircle, AiOutlineArrowRight } from 'react-icons/ai'
import { MdReplay } from 'react-icons/md'

import Progressbar from '../components/Bar.js'
import { MyIcon, Value } from '../components/CommonTags.js'
import { CoinInfoCard } from '../components/CommonPanel.js'
import {
    titlefont,
    titleStyle,
    openButtonStyle,
} from './commonStyle.js'

const Collateral = ({title, value}) => (
    <div>
        <p style={titleStyle}>{title} <AiOutlineInfoCircle isze={10} /></p>
        <Value size={20} color={"#A32F76"} value={8323.1640} type={"dolar"} />
    </div>
)

const APR = ({title, value, value1}) => (
    <div className="d-flex justify-content-between p-0">
        <Col lg={6}>
            <p style={titleStyle}>{title} <AiOutlineInfoCircle size={10} /></p>
            <Value size={20} color={"#40FD9C"} value={-4.51} type={"percent"} />
        </Col>
        <Col lg={6} className="d-flex align-items-center justify-content-end pe-2">
            <span style={titleStyle} className="pb-4">Borrow Limit: </span>
            <Value size={13} color={"#A32F76"} value={5858.5355} type={"dolar"} />
        </Col>
    </div>
)

const tokens = [
    {name: "BLUNA", rate: "112.415", amount: "65.144008" },
    {name: "BETH", rate: "3494.324", amount: "0"},
    {name: "WasAvax", rate: "0.981", amount: "0"},
]

const TokenList = ({data}) => {
    return (
        data.map((token, index) => 
            <div key={index} className="d-flex justify-content-between justify-content-start" style={{color: "#F3F3F3"}}>
                <Col><MyIcon name={(token.name).toLowerCase()} size={12} /> {token.name}</Col>
                <Col><span>{token.rate}</span></Col>
                <Col><span>{token.amount}</span></Col>
                <Col><span>{(token.rate * token.amount).toFixed(3)}</span></Col>
            </div>
        )
    )
}

const ARPAction = ({ action, value }) => {
    return (
        <div className="d-flex justify-content-center" >
            <Col md={4} lg={2} className="d-flex align-items-center justify-content-end m-0">
                <MyIcon name={action} size="24" />
            </Col>
            <Col md={8} lg={10}>
                <p style={titleStyle} className="mb-0">{action} APR</p>
                <p style={titleStyle} className="text-white fs-5 mb-0">{value}</p>
            </Col>
        </div>
    )
}

const Righttop = () => {
    return ( 
        <Container className="p-0">
            <Row className="pt-3 d-flex justify-content-between">
                <Col md={6} lg={8}>
                    <MyIcon name="anchor" size={25} />
                    <span style={titlefont} > Your Current Anchor Position</span>
                </Col>
                <Col className="text-end">
                    <button style={openButtonStyle}>
                        <MyIcon name="anchor" size={15} />
                        <span className="text-info" style={{fontSize: "14px", }}> Open Anchor</span>
                    </button>
                </Col>
            </Row>
            <Row>
                <p style={titleStyle} className="mt-0">
                    <span>Borrow Usage <AiOutlineInfoCircle size={10} /></span>
                </p>
            </Row>
            <Progressbar bgcolor="#40FD9C" progress='75'  height={15} />
            <Row>
                <Col xl={5} lg={12} md={12} className="p-0">
                    <CoinInfoCard 
                        height="200px"
                        head={<Collateral title="Collateral Value" value="8323.1640"/>}
                        body={<TokenList data={tokens} className="ms-2"/>} />
                </Col>
                <Col xl={3} lg={6} md={12} className="p-0">
                    <CoinInfoCard
                        height="200px"
                        head={<Collateral title="Borrow" value="4993.9024"/>}
                        body={<span className="d-flex align-items-end justify-content-center mt-4"><MdReplay size="18" /> <span style={{position: "relative", top: "2px", marginTop: "10px" }}> REPAY LOAN </span> <AiOutlineArrowRight size="18"/></span>} />
                </Col>
                <Col xl={4} lg={6} md={12} className="p-0">
                    <CoinInfoCard
                        height="200px"
                        head={<APR title="Collateral Value" value="-4.51" value1="5858.5355"/>}
                        body={
                            <div className="d-flex">
                                <Col md={5}><ARPAction action="Borrow" value="12.83" /></Col>
                                <Col md={7}><ARPAction action="Distribution" value="8.32" /></Col>
                            </div>
                        }
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Righttop