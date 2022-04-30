import React, {Component} from 'react';
import { Container, Col, Row, Button } from "react-bootstrap"
import { BsArrowRight } from "react-icons/bs";

import Potfolio from "../panels/Portfolio.js"
import NFTs from "../panels/NFTs.js"
import Assets from "../panels/Assets.js"
import Pools from "../panels/Pools.js"

import Card from "../components/Card.js"
import Linechart from "../components/Linechart.js"
import Piechart from "../components/Piechart.js"

import 'bootstrap/dist/css/bootstrap.min.css';
import './Terra.css';

class Dashboard extends Component {
  render() {

    const leftStyle = {
      width: "100px",
      backgroundColor: "black",
      padding: "0"
    };

    const topStyle = {
      backgroundColor: "#111111",
      height: "100px"
    }

    return (
      <Row>
        <Col sm={1} lg={1} style={leftStyle}>
        </Col>
        <Col className="p-0 text-white">
          <Row style={topStyle}></Row>
          <Row className="p-4 bg-dark">
            <h3>Dashboard</h3> 
            <Col lg={7} md={12}>
                <Card name="Portfolio" height="" component={<Potfolio />} />
                <Card name="NFTs" height="" component={<NFTs />} />
            </Col>
            <Col lg={3} md={6} className="pe-2">
                <Card name="Assets" height="" component={<Assets />} />
                {/* <Card name="Assets" height="" component={<Piechart />} /> */}
                <Card name="Pools" height="" component={<Pools />} />
            </Col>
            <Col lg={2} md={6}>
              <Button className="btn btn-dark btn-outline-info mt-2 rounded-7 fs-5"><span className="text-white"> Link Wallet </span><BsArrowRight className="ms-2"/></Button>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default Dashboard