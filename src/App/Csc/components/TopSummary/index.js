import React from "react";
import { Card, Col, Row } from 'antd';
import "./styles.css";

const TopSummary = () => {
    return (
        <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={6}>
            <Card  bordered={true} className="text-blue">
                <span>10</span>
                <h4>Packages</h4>
            </Card>
          </Col>
          <Col span={6}>
            <Card bordered={true} className="text-blue">
               <span>47</span>
                <h4>Sub-projects</h4>
            </Card>
          </Col>
          <Col span={6}>
            <Card bordered={true} className="text-blue">
               <span>7</span>
                <h4>Contractors</h4>
            </Card>
          </Col>
          <Col span={6} >
            <Card bordered={true} className="text-blue">
               <h4>Latest Report</h4>
                <h4>May 12 2021</h4>
            </Card>
          </Col>
        </Row>
      </div>
    )
}
 
export default TopSummary;