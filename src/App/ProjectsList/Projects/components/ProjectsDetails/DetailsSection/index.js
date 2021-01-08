import React from "react";
import { Col, Row, } from 'antd';

const DetailsSection = () => {
    return (
        <div>
            <header className="detail-header"><h2>Other Projects Details</h2></header>
            <Row gutter={[16, 24]} className="details">
                <Col className="gutter-row" span={8}>
                    <h4>Approval FY </h4>
                    <p>2ermmfk</p>
                </Col>
                <Col className="gutter-row" span={8}>
                    <h4>Approval Date</h4>
                    <p>2ermmfk</p>
                </Col>
                <Col className="gutter-row" span={8}>
                    <h4>Closing Date</h4>
                    <p>2ermmfk</p>
                </Col>
                <Col className="gutter-row" span={8}>
                    <h4>Implementing Agency</h4>
                    <p>2ermmfk</p>
                </Col>
                <Col className="gutter-row" span={8}>

                    <h4>Funding Organisation</h4>
                    <p>2ermmfk</p>
                </Col>
                <Col className="gutter-row" span={8}>

                    <h4>Environment Category</h4>
                    <p>2ermmfk</p>
                </Col>
                <Col span={24}><h4>Description</h4>
                    <p>The objective of the Agriculture Competitiveness Project for Moldova is to enhance the competitiveness of the agro food sector by supporting the modernization of the food safety management system, facilitating market access for farmers, and mainstreaming agro-environmental and sustainable land management practices. It is proposed to trigger OP/BP4.11, Physical Cultural Resources, </p>
                </Col>
            </Row>
        </div>

    )
}

export default DetailsSection;