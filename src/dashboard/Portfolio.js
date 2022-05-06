import React from 'react';
import {Row, Col} from 'react-bootstrap';

import {Circledot} from '../components/CommonTags.js';
import { Statusupdown } from '../components/CommonTags.js';
import MultiLinechart from '../components/MultiLinechart.js';


 function Portfolio( { colors } ) {
   let primary = 480000.6;
   let current = 750000;
    return (
      <div>
        <Row>
          <Col className={"pe-0 text-"+colors.label}>
            <Circledot color={colors.line[0]} size="8px" /> Worth
            <p className="text-muted">&nbsp;&nbsp;&nbsp;${current}<Statusupdown primary={primary} current={current} /></p>
          </Col>
          <Col className={"me-0 text-"+colors.label} xs={4}>
            <Circledot color={colors.line[1]} size="8px" /> Investment
            <p className="text-muted">&nbsp;&nbsp;&nbsp;$500,000</p>
          </Col>
          <Col className={"text-end pr-0 text-"+colors.label}>Profit/Loss
            <p className="text-muted">$250,000</p>
          </Col>
        </Row>
        <MultiLinechart color={colors.line}/>
      </div>
    );
  }

export default Portfolio;