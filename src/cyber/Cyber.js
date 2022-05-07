import React, { useState } from 'react'
import classnames from 'classnames'
import Select from 'react-select'
import { Col, Row } from "react-bootstrap"
import { AiOutlineMinus, AiOutlineTwitter } from "react-icons/ai"
import { BiRefresh, BiBarChart } from "react-icons/bi"
import { BsArrowDown, BsArrowUp, BsWallet2 } from "react-icons/bs"
import { CgVoicemailR } from "react-icons/cg"
import { FiSettings, FiImage } from "react-icons/fi"
import { GiSelfLove, GiParachute } from "react-icons/gi"
import { HiOutlineOfficeBuilding } from "react-icons/hi"
import { IoIosArrowDown } from 'react-icons/io'
import { RiDashboardLine, RiBankLine } from "react-icons/ri"
import { SiDiscord } from 'react-icons/si'

import NFTs from '../dashboard/NFTs.js'
import Card from '../components/Card.js'
import MultiLinechart from '../components/MultiLinechart.js'
import { Statusupdown, MyIcon } from '../components/CommonTags.js'

import Exposure from './Exposure'
import Assets from './Assets'

import 'bootstrap/dist/css/bootstrap.min.css';

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
    {id: "0", action: "in",  client: "EasyCrypto", token: "Luna", amount: "20", icon: "easyCrypto", time: "" },
    {id: "1", action: "in",  client: "dokwon.ust", token: "Luna", amount: "20", icon: "", time: "" },
    {id: "2", action: "in",  client: "Anchor", token: "Anchor", amount: "20", icon: "anchor", time: "" },
    {id: "3", action: "out",  client: "Jord", token: "UST", amount: "20", icon: "", time: "" },
    {id: "4", action: "out",  client: "terra", token: "UST", amount: "20", icon: "", time: "" },
    {id: "5", action: "in",  client: "Nexus", token: "Anchor", amount: "20", icon: "nexus", time: "" },
    {id: "6", action: "out",  client: "terra", token: "UST", amount: "20", icon: "", time: "" },
    {id: "7", action: "out",  client: "terra", token: "UST", amount: "20", icon: "", time: "" },
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
            <p className="m-0 fw-bold">{item.client} <MyIcon name={item.icon} size={12}/></p>
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
    {id: "0", icon: "orion", token: "Orion.Money", primary: "35",  current: "53" },
    {id: "1", icon: "stakingfund", token: "Staking Fund", primary: "35",  current: "53" },
    {id: "2", icon: "Bharvest", token: "B-Harvest", primary: "64",  current: "53" },
    {id: "3", icon: "staky", token: "Staky.io", primary: "35",  current: "53"},
    {id: "4", icon: "certus", token: "certus One", primary: "55",  current: "53"},
  ]

  const stakingList = stakingData.map((item, index) => {
    
    return (
      <div key={index} className="pb-2 pt-3 d-flex">
        <div>
          <MyIcon name={item.icon} size={16}/>
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

const Address = () => {
  let address = ["address1", "address2", "address3", "address4"]


  return (
    <Row className="p-2 flex-column">
      <Col 
        style={{backgroundColor: "#403655", color: "#D8BDFB"}}
        className="p-3 sub-info rounded-10 d-flex justify-content-between">
          <span>Send</span>
          <IoIosArrowDown /></Col>
      <Col className="ps-2 pe-2">
        <div style={{backgroundColor: "#403655", color: "#D8BDFB"}} className="p-2">
          {address.map((item, index) => <p key={index}>montecarlo {item}</p>)}
        </div></Col>
    </Row>
  )

}

const Wallets = () => {

  let walletsData = [
    {id: "0", token: "UST", amount: "34"},
    {id: "1", token: "Luna", amount: "22"},
    {id: "2", token: "VKR", amount: "44"},
    {id: "3", token: "Psi", amount: "345"},
    {id: "4", token: "MIR", amount: "32"},
    {id: "5", token: "MINE", amount: "3"},
  ]

  return (
    <div style={{backgroundColor: "#4D4562"}} className="pb-3 rounded-10 mt-4">
      <Row
        style={{color: "#84899D"}}
        className="p-2 m-0 d-flex justify-content-between fw-bold">
        <Col xs={4} className="p-0" >PERSIONAL</Col>
        <Col className="p-0 text-end">$2342342.42 UST</Col>
      </Row>
      <Row className="m-0 pe-2 " style={{backgroundColor: "#494360"}}>
        {walletsData.map((item, index) => {
          
          let rate = 50;
          let amount = item.amount
          let withUST = item.amount * rate 
          if (item.token == "UST") {
            amount = "$" + item.amount
            withUST = ""
          }
          return (
            <div key={index} className="pb-2 pt-3 d-flex">
              <div>
                <MyIcon name={item.token} size={16}/>
              </div>
              <Col>
                <Row className="d-flex justify-content-between ps-2">
                  <Col xs={5} className="pe-2 border-bottom-gray">
                    <p className="m-0 sub-info fw-bold">{item.token}</p>
                    <p className="m-0 fw-bold text-white">{amount}</p>
                  </Col>
                  <Col xs={7} className="pe-0 pe-0 border-bottom-gray text-end">
                    <p className="m-0 fw-bold sub-info">{withUST} UST</p>
                  </Col>
                </Row>
              </Col>
            </div>
              )
            })
          }
      </Row>
    </div>
  )
}
 
const Cyber = () => {

  const [activeTab, setActiveTab] = useState()
    
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  }

  const options = [
    { value: 'xdsdeod12k3kdk93kn43k343ddsf', label: 'Monte' },
    { value: 'xdsdeod12k3kdk93kn43k343ddsf', label: 'Superdsf' },
    { value: 'xdsdeod12k3kdk93kn43k343ddsf', label: 'Vanilla' }
  ]

  const selectStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "#494360", fontWeight: "bold", border: "none" }),
    option: (styles, { isDisabled }) => {
      return {
        ...styles,
        backgroundColor: "white",
        color: "#B4B0BB",
        cursor: isDisabled ? "not-allowed" : "default"
      };
    }
  };
  
  return (
    <div className="p-4 cyber-body">
      
      {/* Top title Row */}
      <Row className="m-0">
        <p className="m-0 p-3 text-center sub-info fs-5" style={{backgroundColor: "#170F30"}}>Dashboard</p>
      </Row>
      
      {/* mainboard Row */}
      <Row className="m-0" style={{ backgroundColor: "#1A1235" }}>
      
        {/* Left menu bar */}
        <div style={{width: "100px", height: "1200px"}} className="d-flex justify-content-center pt-5">

          <div className="d-flex flex-column menu" >
            <button
                className={classnames({ clicked: activeTab === '1' })}
                onClick={() => { toggle('1'); }}
            ><RiDashboardLine color="white" size={20} /></button>
            <button 
                className={classnames({ clicked: activeTab === '2' })}
                onClick={() => { toggle('2'); }}
            ><BiBarChart color="white" size={20} /></button>
            <button 
                className={classnames({ clicked: activeTab === '3' })}
                onClick={() => { toggle('3'); }}
            ><BsWallet2 color="white" size={20} /></button>
            
            <AiOutlineMinus size={30}/>
            
            <button 
                className={classnames({ clicked: activeTab === '4' })}
                onClick={() => { toggle('4'); }}
            ><BiBarChart color="white" size={20} /></button>
            <button 
                className={classnames({ clicked: activeTab === '5' })}
                onClick={() => { toggle('5'); }}
            ><GiParachute color="white" size={20} /></button>
            <button 
                className={classnames({ clicked: activeTab === '6' })}
                onClick={() => { toggle('6'); }}
            ><CgVoicemailR color="white" size={20} /></button>
            
            <AiOutlineMinus size={30}/>

            <button 
                className={classnames({ clicked: activeTab === '7' })}
                onClick={() => { toggle('7'); }}
            ><FiImage color="white" size={20} /></button>
            <button 
                className={classnames({ clicked: activeTab === '8' })}
                onClick={() => { toggle('8'); }}
            ><GiSelfLove color="white" size={20} /></button>

            <AiOutlineMinus size={30}/>

            <button 
                className={classnames({ clicked: activeTab === '9' })}
                onClick={() => { toggle('9'); }}
            ><RiBankLine color="white" size={20} /></button>
            <button 
                className={classnames({ clicked: activeTab === '10' })}
                onClick={() => { toggle('10'); }}
            ><HiOutlineOfficeBuilding color="white" size={20} /></button>

            <AiOutlineMinus size={30}/>

            <button 
                className={classnames({ clicked: activeTab === '11' })}
                onClick={() => { toggle('11'); }}
            ><FiSettings color="white" size={20} /></button>
          </div>
        </div>
      
        <Col className="pt-4 min-400">

          {/* main Info Column include wallet */}
          <Row>

            {/* chart, activity, NFTs, Staking, Pools */}
            <Col xl={9} lg={8} md={8} className="">

              {/* top row of main Info */}
              <Row className="">
                
                {/* chart panel */}
                <Col xl={8} lg={12} md={12} className="p-3">
                  <Card 
                    name="Portfolio & Assets"
                    theme="white"
                    element={<Charts />} />
                </Col>

                {/* activity column */}
                <Col xl={4} lg={12} md={12} className="p-3">
                  <Row className="pe-3 ps-3">
                    <Card name="Luna" sort={["Today"]} theme="white" element={<Luna />} />
                  </Row>
                  <Row className="ps-3 pe-3 pt-4">
                    <Card name="Recent Activity" theme="white" element={<Activity style={""}/>}/>
                  </Row>
                </Col>
              </Row>

              {/* Bottom Row of main Info*/}
              <Row>

                {/* NFTs panel */}
                <Col xl={4} lg={12} md={12} sm={12} className="p-3">
                  <Card
                    name="NFTs"
                    theme="white"
                    sort={["Floor Price", "Since Purchase"]}
                    element={<NFTs color="white" size={"75"}/>} />
                </Col>

                {/* Staking panel */}
                <Col xl={4} lg={6} md={12} sm={12} className="p-3">
                  <Card
                    name="Staking"
                    sort={["APY", "Today"]}
                    theme="white"
                    element={<Staking />} />
                </Col>

                {/* Pools panel */}
                <Col xl={4} lg={6} md={12} sm={12} className="p-3">
                  <Card
                    name="Pools"
                    sort={["APY", "Today"]}
                    theme="white"
                    element={<Pools />} />
                </Col>
              </Row>
            </Col>

            {/* right wallet column */}
            <Col xl={3} lg={4} md={4} className="p-3">
              <Select
                options={options}
                styles={selectStyles}
                className="pt-2"
                label="Send"
              />
              {/* <Address /> */}
              <Wallets />
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="fix-div">
        <button className="fix-button"><SiDiscord size={25} color="white"/>&nbsp;&nbsp; DisCord</button>
        <button className="fix-button"><AiOutlineTwitter size={25} color="white"/>&nbsp;&nbsp; Twitter</button>
      </div>
      
    </div>
  )
}

export default Cyber