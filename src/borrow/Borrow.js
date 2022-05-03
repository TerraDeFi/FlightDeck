import React, {Component} from 'react';
import { Col, Row, Button } from "react-bootstrap"

import Left from "./Left.js"
import Righttop from "./Righttop.js"
import Rightbottom from "./Rightbottom.js"

import Panel from "../components/Panel.js"

import 'bootstrap/dist/css/bootstrap.min.css';
import './borrow.css';

class Borrow extends Component {
  render() {

    return (
        <Row style={{color: "white"}} className="p-3 bg-dark">
            <Col lg={3} md={5} sm={12} style={{minWidth: "390px"}} className="pb-2">
                <Panel component={<Left />} bg="#1B1B1B" />
            </Col>
            <Col className="px-4">
                <Row>
                    <Panel  bg="#1B1B1B" component={<Righttop />} />
                </Row>
                <Row className="pt-2">
                    <Panel  bg="#1B1B1B" height="400px" component={<Rightbottom />} />
                </Row>
            </Col>
        </Row>
    )
  }
}

export default Borrow