import React, { useState } from 'react'
import { Chart as ChartJS } from 'chart.js';
import classnames from 'classnames'
import {
    Container,
    Row,
    Col,
    ButtonGroup,
    Button
} from 'react-bootstrap'

import Line from '../components/LineChart.js'
import { titleFont } from './commonStyle.js'
import { MyIcon } from '../components/CommonTags'

const Rightbottom = () => {

    const [activeTab, setActiveTab] = useState()
    
    const toggle = (tab) => {
      if (activeTab !== tab) {
        setActiveTab(tab);
      }
    }

    const style = {
        backgroundColor: "#222222",
        border: 0,
        borderRadius: "10px",
        color: "#C3C3C3",
        fontSize: "14px",
        fontWeight: 900,
        paddingLeft: "5px",
        paddingRight: "5px", 
    }

    return (
        <Container className="p-0 pt-2">
            <Row>
                <Col lg={3} md={12} sm={12} className="d-flex">
                    <p style={titleFont}>0.0821 UST </p>
                    <p>
                        <MyIcon name="growup" size={25} color="info" />
                        <span style={{fontWeight: 900, fontSize: "20px", color: "#6ED8DD"}}> 1.58%</span>
                    </p>
                </Col >
                <Col className="d-flex justify-content-center">
                    <ButtonGroup className="me-2 bg-dark rounded-10" aria-label="First group">
                        <Button variant="dark">1h</Button>{' '}
                        <Button variant="dark">12h</Button>{' '}
                        <Button variant="dark">1d</Button>{' '}
                        <Button variant="dark">1w</Button>{' '}
                        <Button variant="dark">1M</Button>{' '}
                        <Button variant="dark">3M</Button>{' '}
                        <Button variant="dark">1y</Button>
                    </ButtonGroup>
                </Col>
                <Col lg={3} md={6} sm={6}>
                    <div className="chart-switch d-flex justify-content-end m-2 p-1 rounded-10" style={{backgroundColor: "#222", width: "fit-content"}} >
                        <button
                            className={classnames({ clicked: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                            style={style}
                        >SIMPLE</button>
                        <button 
                            className={classnames({ clicked: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                            style={style}
                        >ADVANCED</button>
                    </div>
                </Col>
            </Row>
            <Row className="p-0">
                <Line />
            </Row>
        </Container>
    );
}

export default Rightbottom