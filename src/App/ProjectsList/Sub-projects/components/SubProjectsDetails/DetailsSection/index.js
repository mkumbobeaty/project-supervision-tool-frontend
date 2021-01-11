import React from "react";
import { Col, Row, } from 'antd';
import { isoDateToHumanReadableDate } from "../../../../../../Util";

const DetailsSection = ({ sub_project }) => {
    return (
        <div>
            <header className="detail-header"><h2>Other sub_project Details</h2></header>
            <Row gutter={[16, 24]} className="details">
                <Col className="gutter-row" span={8}>
                    {/* <h4>Approval FY </h4>
                    <p>{isoDateToHumanReadableDate(sub_project?.details?.approval_fy)}</p>
                </Col>
                <Col className="gutter-row" span={8}>
                    <h4>Approval Date</h4>
                    <p>{isoDateToHumanReadableDate(sub_project?.details?.approval_date)}</p>
                </Col>
                <Col className="gutter-row" span={8}>
                    <h4>Closing Date</h4>
                    <p>{isoDateToHumanReadableDate(sub_project?.details?.closing_date)}</p>
                </Col>
                <Col className="gutter-row" span={8}>
                    <h4>Implementing Agency</h4>
                    <p>{sub_project?.details ? sub_project?.details.implementing_agency.name : 'N/A'}</p>
                </Col>
                <Col className="gutter-row" span={8}>

                    <h4>Funding Organisation</h4>
                    <p>{sub_project?.details ? sub_project?.details.funding_organisation.name : 'N/A'}</p>
                </Col>
                <Col className="gutter-row" span={8}>

                    <h4>Environment Category</h4>
                    <p>{sub_project?.details ? sub_project?.details?.environmental_category?.name : 'N/A'}</p>
                </Col>
                <Col span={24}><h4>Description</h4>
                    <p>{sub_project ? sub_project?.description : 'N/A'}</p> */}
                </Col>
            </Row>
        </div>

    )
}

export default DetailsSection;