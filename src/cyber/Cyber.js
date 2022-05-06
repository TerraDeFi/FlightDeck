import React, { useState } from 'react';
import classnames from 'classnames';
import { Container, Col, Row, Button } from "react-bootstrap"
import { BsArrowRight, BsArrowDown, BsArrowUp } from "react-icons/bs";

import NFTs from '../dashboard/NFTs.js'
import Card from '../components/Card.js'
import MultiLinechart from '../components/MultiLinechart.js'
import { Statusupdown, MyIcon } from '../components/CommonTags.js'

import Exposure from './Exposure'
import Assets from './Assets'

import 'bootstrap/dist/css/bootstrap.min.css';
import './cyber.css';

const Charts = () => {
  
  return (
    <div className="p-0">   
      <Row className="pb-4">
        <p className="text-gray m-0 pt-0 fs-5 fw-bold">Performance</p>
        <MultiLinechart colors={{line: ["#5BCC97", "#4BA0F8"], label: "black", theme: "white"}}/>
      </Row>
      <Row>
        <Col lg={6} md={12} className="border-top">
          <p className="text-gray m-0 fs-5 fw-bold pt-3">Exposure</p>
          <Exposure/>
        </Col>
        <Col lg={6} md={12} className="border-top">
          <p className="text-gray m-0 fs-5 fw-bold pt-3">Assets</p>
          <Assets />
          </Col>
      </Row>
    </div>
  )
}

const Luna = () => {
  let current = 64.324874
  return (
    <div className="m-0 p-0">
      <p className="fs-4 mb-0 fw-bold">{current} UST</p>
      <p className="mb-0"><Statusupdown primary={53.161053} current={current} /><span className="sub-info"> vs Yesterday</span></p>
    </div>
  )
}

const Activity = () => {

  let rate = {
    Luna: 42.38,
    Anchor: 2.14,
  }

  let activityData = [
    {id: "0", action: "in",  client: "EasyCrypto", token: "Luna", amount: "20", time: "" },
    {id: "1", action: "in",  client: "dokwon.ust", token: "Luna", amount: "20", time: "" },
    {id: "2", action: "in",  client: "Anchor", token: "Anchor", amount: "20", time: "" },
    {id: "3", action: "out",  client: "Jord", token: "UST", amount: "20", time: "" },
    {id: "4", action: "out",  client: "terra", token: "UST", amount: "20", time: "" },
    {id: "5", action: "in",  client: "Nexus", token: "Anchor", amount: "20", time: "" },
    {id: "6", action: "out",  client: "terra", token: "UST", amount: "20", time: "" },
    {id: "7", action: "out",  client: "terra", token: "UST", amount: "20", time: "" },
  ]

  const activityList = activityData.map((item, index) => {
    
    const activeStatus = item.action == "in" ? 
                          <Col xs={1}>
                            <BsArrowDown color="green" />
                            <BsArrowUp color="gray" />
                          </Col>
                          : <Col xs={1}><BsArrowUp color="gray" /></Col>

    return (
      <div key={index} className="pb-2 pt-3 d-flex">
        {activeStatus}
        <Row className="col-11 d-flex justify-content-between">
          <Col xs={7} className="pe-0 pe-0 border-bottom-gray">
            <p className="m-0 fw-bold">{item.client} <MyIcon name="Luna" size={12}/></p>
            <p className="sub-info m-0">12:21PM</p>
          </Col>
          <Col xs={5} className="p-0 border-bottom-gray">
            <p className="m-0 fw-bold sub-info text-end">20 Luna</p>
            <p className="m-0 sub-info text-end">$847.60 UST</p>
          </Col>
        </Row>
      </div>
      )
  })

  return activityList

}

const Cyber = () => {

  return (
    <div className="p-4 bg-dark">
      <Row className="m-0 bg-info text-center">
        Dashboard
      </Row>
      <Row className="m-0 bg-secondary">
        <div style={{width: "100px", height: "1200px"}}></div>
        <Row>
        <Col className="pt-4 bg-success">
          <Row>
            <Col lg={9} md={8} className="bg-info">
              <Row>
                <Col lg={8} md={12} className="bg-primary">
                  <Card 
                    name="Portfolio & Assets"
                    theme="white"
                    element={<Charts />} />
 
                </Col>
                <Col lg={4} md={12} className="bg-secondary">
                  <Card name="Luna" sort={["Today"]} theme="white" element={<Luna />} />
                  <Card name="Recent Activity" theme="white" element={<Activity style={"" }/>} />
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={12} sm={12} className="bg-info">
                  <Card
                    name="NFTs"
                    theme="white"
                    sort={["Floor Price", "Since Purchase"]}
                    element={<NFTs color="white" size={"70"}/>} />
                </Col>
                <Col lg={4} md={6} sm={12} className="bg-warning">
                  <Card
                    name="Staking"
                    sort={["APY", "Today"]}
                    theme="white"
                    element={""} />
                </Col>
                <Col lg={4} md={6} sm={12} className="bg-danger">
                  <Card
                    name="Pools"
                    sort={["APY", "Today"]}
                    theme="white"
                    element={""} />
                </Col>
              </Row>
            </Col>
            <Col lg={3} md={4} className="bg-dark">
              <Card
                name="NFTs"
                theme="white"
                element={""} />
            </Col>
          </Row>

        </Col>
      </Row>
      </Row>
    </div>


  )
}

export default Cyber