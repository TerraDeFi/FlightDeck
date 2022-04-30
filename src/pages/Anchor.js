import React, {Component} from 'react';
import { Col, Row, Button } from "react-bootstrap"
import { BsArrowRight } from "react-icons/bs";

import Potfolio from "../panels/Portfolio.js"
import NFTs from "../panels/NFTs.js"
import Assets from "../panels/Assets.js"
import Pools from "../panels/Pools.js"

import Panel from "../components/Panel.js"
import Linechart from "../components/Linechart.js"
import Piechart from "../components/Piechart.js"

import 'bootstrap/dist/css/bootstrap.min.css';
import './anchor.css';

class Dashboard extends Component {
  render() {

    return (
        <Row className="p-2 bg-dark">
            <Col lg={3} md={6}>
                <Panel name="Portfolio" height="1200px" />
                {/* <Panel name="NFTs" height="" component={<NFTs />} /> */}
            </Col>
            <Col lg={9} md={6} className="px-4">
                <Row>
                    <Panel name="Assets" height="600px" />
                </Row>
                <Row>
                    <Panel name="Pools" height="600px" />
                </Row>
            </Col>
        </Row>
    )
  }
}

export default Dashboard