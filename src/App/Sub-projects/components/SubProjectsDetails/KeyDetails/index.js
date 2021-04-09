import { Col, Row } from "antd";
import React from "react";

const keyDetailSpan = { xxl: 6, xl: 6, lg: 6, md: 6, sm: 12, xs: 12 };

const KeyDetailSection = ({ sub_project }) => {
    return (
        <section className="container">
            <Row className="key-details">
                <Col {...keyDetailSpan}>
                    <h4>Project</h4>
                    <p>{sub_project ? sub_project?.project_id : 'N/A'}</p>
                </Col>
                <Col {...keyDetailSpan}>
                    <h4>Sub Project Item</h4>
                    <p>{sub_project ? sub_project?.type.name : 'N/A'}</p>
                </Col>
                <Col {...keyDetailSpan}>
                    <h4>Component</h4>
                    <p>{sub_project ? sub_project?.status.name : 'N/A'}</p>
                </Col>
                <Col {...keyDetailSpan}>
                    <h4>Sub-Component</h4>
                    <p>{sub_project ? sub_project?.type.name : 'N/A'}</p>
                </Col>
                <Col {...keyDetailSpan}>
                    <h4>Procuring Entity</h4>
                    <p>{sub_project ? "Ilala Municipal council" : 'N/A'}</p>
                </Col>
                <Col {...keyDetailSpan}>
                    <h4>Package</h4>
                    <p>{sub_project ? "Package 3" : 'N/A'}</p>
                </Col>
                <Col {...keyDetailSpan}>
                    <h4>Contract Number</h4>
                    <p>{sub_project ? "LGA/116/2016-2017/W/DMDP/04" : 'N/A'}</p>
                </Col>
                <Col {...keyDetailSpan}>
                    <h4>Contract Amount</h4>
                    <p>{sub_project ? "$3938000M" : 'N/A'}</p>
                </Col>
                <Col {...keyDetailSpan}>
                    <h4>Costractor</h4>
                    <p>{sub_project ? "Mhandisi Consulting Company" : 'N/A'}</p>
                </Col>
                <Col {...keyDetailSpan}>
                    <h4>Costruction Supervisor</h4>
                    <p>{sub_project ? "MELT company group" : 'N/A'}</p>
                </Col>
                <Col {...keyDetailSpan}>
                    <h4>Locations</h4>
                    {sub_project?.districts ? sub_project?.districts.map(({ name }) => <p>{name}</p>) : 'N/A'}
                </Col>
                <Col {...keyDetailSpan}>
                    <h4>Stage</h4>
                    <p>{sub_project ? "Implemention" : 'N/A'}</p>
                </Col>
                <Col {...keyDetailSpan} >
                    <h4>Start Date</h4>
                    <p>{sub_project ? "12 July 2018" : 'N/A'}</p>
                </Col>
                <Col {...keyDetailSpan} >
                    <h4>End Date</h4>
                    <p>{sub_project ? "30 June 2022" : 'N/A'}</p>
                </Col>

                <Col {...keyDetailSpan} >
                    <h4>Last updated</h4>
                    <p>{sub_project ? "30 June 2020" : 'N/A'}</p>
                </Col>
            </Row>
        </section>

    )
}

export default KeyDetailSection;