import React from 'react';
import {Row, Col} from 'react-bootstrap';
// import { BsArrowDown, BsArrowUp } from "react-icons/bs";

import Linechart from '../components/Linechart.js';
import Circledot from '../components/Circledot.js';
import Statusupdown from '../components/Statusupdown.js';
import MultiLinechart from '../components/MultiLinechart.js';


 function Portfolio() {
   let primary = 480000.6;
   let current = 750000;
    return (
      <div>
        <Row>
          <Col className="pe-0">
            <Circledot color="#0dcaf0" size="8px" /> Worth
            <p className="text-muted">&nbsp;&nbsp;&nbsp;${current}<Statusupdown primary={primary} current={current} /></p>
          </Col>
          <Col className="me-0" xs={4}>
            <Circledot color="#d63384" size="8px" /> Investment
            <p className="text-muted">&nbsp;&nbsp;&nbsp;$500,000</p>
          </Col>
          <Col className="text-end pr-0">Profit/Loss
            <p className="text-muted">$250,000</p>
          </Col>
        </Row>
        <MultiLinechart />
      </div>
    );
  }

export default Portfolio;