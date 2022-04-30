import React, {Component} from 'react';
import { Col, Row, Button } from "react-bootstrap"
import { BsArrowRight } from "react-icons/bs";

import Left from "../panels/Left.js"
import Righttop from "../panels/Righttop.js"
import Rightbottom from "../panels/Rightbottom.js"

import Panel from "../components/Panel.js"
import Linechart from "../components/Linechart.js"

import 'bootstrap/dist/css/bootstrap.min.css';
import './anchor.css';

class Dashboard extends Component {
  render() {

    return (
        <Row style={{color: "white"}} className="p-3 bg-dark">
            <Col lg={3} md={6}>
                <Panel name="Portfolio" height="1200px" component={<Left />} />
                {/* <Panel name="NFTs" height="" component={<NFTs />} /> */}
            </Col>
            <Col lg={9} md={6} className="px-4">
                <Row>
                    <Panel name="Assets" height="400px" component={<Righttop />} />
                </Row>
                <Row className="pt-2">
                    <Panel name="Pools" height="800px" component={<Rightbottom />} />
                </Row>
            </Col>
        </Row>
    )
  }
}

export default Dashboard