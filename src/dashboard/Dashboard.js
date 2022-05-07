import React from 'react';
import { Col, Row, Button } from "react-bootstrap"
import { BsArrowRight } from "react-icons/bs";

import NFTs from "./NFTs.js"
import Pools from "./Pools.js"
import Assets from './Assets'

import Card from "../components/Card.js"
import MultiLinechart from "../components/MultiLinechart.js"

import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
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
                <Card 
                  name="Portfolio"
                  theme="black"
                  element={<MultiLinechart colors={{line: ["magenta", "cyan"], label: "white", theme: "black"}} />} />
                <Card
                  name="NFTs"
                  theme="black"
                  element={<NFTs color="black" size="100"/>} />
            </Col>
            <Col lg={3} md={6} className="pe-2">
                <Card
                  name="Assets"
                  theme="black"
                  element={<Assets />} />
                <Card
                  name="Pools"
                  theme="black"
                  element={<Pools />} />
            </Col>
            <Col lg={2} md={6}>
              <Button className="btn btn-dark btn-outline-info mt-2 rounded-7 fs-5">
                <span className="text-white"> Link Wallet </span>
                <BsArrowRight className="ms-2"/></Button>
            </Col>
          </Row>
        </Col>
      </Row>
    )
}

export default Dashboard