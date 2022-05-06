import React, { useState } from 'react'
import classnames from 'classnames'
import { Container, Col, Row, Button } from "react-bootstrap"
import { BsArrowRight, BsArrowDown, BsArrowUp } from "react-icons/bs"
import { BiRefresh } from "react-icons/bi"

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
    UST: 1,
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
                            <BiRefresh color="gray" size={18}/>
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
            <p className="m-0 fw-bold sub-info text-end">{item.amount} Luna</p>
            <p className="m-0 sub-info text-end">${(item.amount * rate[item.token]).toFixed(3)} UST</p>
          </Col>
        </Row>
      </div>
    )
  })

  return activityList
}

const Staking = () => {
  let stakingData = [
    {id: "0", token: "Orion.Money", primary: "35",  current: "53" },
    {id: "1", token: "Staking Fund", primary: "35",  current: "53" },
    {id: "2", token: "B-Harvest", primary: "64",  current: "53" },
    {id: "3", token: "Staky.io", primary: "35",  current: "53"},
    {id: "4", token: "certus One", primary: "55",  current: "53"},
  ]

  const stakingList = stakingData.map((item, index) => {
    
    return (
      <div key={index} className="pb-2 pt-3 d-flex">
        <div>
          <MyIcon name="Luna" size={16}/>
        </div>
        <Col>
          <Row className="d-flex justify-content-between ps-2">
            <Col xs={7} className="pe-0 pe-0 border-bottom-gray">
              <p className="m-0 fw-bold">{item.token} </p>
              <p className="sub-info m-0">12:21PM</p>
            </Col>
            <Col xs={5} className="border-bottom-gray text-end">
              <Statusupdown primary={item.primary} current={item.current} down="show"/>
              <p className="m-0 fw-bold sub-info">{(parseInt(item.current)-parseInt(item.primary))} Luna</p>
            </Col>
          </Row>
        </Col>
      </div>
    )
  })
  return stakingList;
};

const Pools = () => {
  let poolsData = [
    {id: "0", token1: "Luna", token2: "Bluna", amount1: "35",  amount2: "53" },
    {id: "1", token1: "Luna", token2: "UST", amount1: "61",  amount2: "53" },
    {id: "2", token1: "VKR", token2: "UST", amount1: "35",  amount2: "53" },
    {id: "3", token1: "Psi", token2: "UST", amount1: "35",  amount2: "53"},
    {id: "4", token1: "MIR", token2: "UST", amount1: "35",  amount2: "53"},
  ]

  const poolsList = poolsData.map((item, index) => {
    
    return (
      <div key={index} className="pb-2 pt-3 d-flex">
        <div>
          <p className="m-0"><MyIcon name="Luna" size={16}/></p>
          <p className="m-0"><MyIcon name="BLuna" size={16}/></p>
        </div>
        <Col>
          <Row className="d-flex justify-content-between ps-2">
            <Col xs={7} className="pe-0 pe-0 border-bottom-gray">
              <p className="m-0 fw-bold">{item.token1+" / "+item.token2} </p>
              <p className="sub-info m-0">{item.amount1+ " "+item.token1+" / "+item.amount2+" "+item.token2}</p>
            </Col>
            <Col xs={5} className="pe-2 border-bottom-gray text-end">
              <Statusupdown primary={item.amount1} current={item.amount2} down="show"/>
              <p className="m-0 fw-bold sub-info">0.23134 Luna</p>
            </Col>
          </Row>
        </Col>
      </div>
    )
  })
  return poolsList;
};

const Cyber = () => {

  return (
    <div className="p-4 bg-dark">
      <Row className="m-0 bg-info text-center">
        Dashboard
      </Row>
      <Row className="m-0 bg-secondary">
        <div style={{width: "100px", height: "1200px"}} className="cyber-menu"></div>
        <Col className="pt-4 bg-success min-400">
          <Row>
            <Col xl={9} lg={8} md={8} className="bg-info">
              <Row>
                <Col xl={8} lg={12} md={12} className="bg-primary">
                  <Card 
                    name="Portfolio & Assets"
                    theme="white"
                    element={<Charts />} />
 
                </Col>
                <Col xl={4} lg={12} md={12} className="bg-secondary">
                  <Card name="Luna" sort={["Today"]} theme="white" element={<Luna />} />
                  <Card name="Recent Activity" theme="white" element={<Activity style={""}/>} />
                </Col>
              </Row>
              <Row>
                <Col xl={4} lg={12} md={12} sm={12} className="bg-info">
                  <Card
                    name="NFTs"
                    theme="white"
                    sort={["Floor Price", "Since Purchase"]}
                    element={<NFTs color="white" size={"75"}/>} />
                </Col>
                <Col xl={4} lg={6} md={12} sm={12} className="bg-warning">
                  <Card
                    name="Staking"
                    sort={["APY", "Today"]}
                    theme="white"
                    element={<Staking />} />
                </Col>
                <Col xl={4} lg={6} md={12} sm={12} className="bg-danger">
                  <Card
                    name="Pools"
                    sort={["APY", "Today"]}
                    theme="white"
                    element={<Pools />} />
                </Col>
              </Row>
            </Col>
            <Col xl={3} lg={4} md={4} className="bg-dark">
              <Row>
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                  </button>
                  <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                    <li><a class="dropdown-item active" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                    <li><span class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Separated link</a></li>
                  </ul>
                </div>
              </Row>
              <Card
                name="NFTs"
                theme="white"
                element={""} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Cyber