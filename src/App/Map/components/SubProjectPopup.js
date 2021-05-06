import React from "react";
import { isoDateToHumanReadableDate, moneyFormat } from "../../../Util";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Col, Row, Spin } from "antd";
import { PictureOutlined, FileOutlined } from "@ant-design/icons";

const SubProjectPopupDetail = ({ subProject, loading, project }) => {
    const getCommitmentAmount = (data) => {
        const { amount, currency } = data
        const { iso } = currency;
        const money = moneyFormat(amount);
        return `${iso} ${money}`;
    }

    const commitmentAmount = project?.details?.commitment_amount ? getCommitmentAmount(project?.details?.commitment_amount) : 'N/A';
    const totalProjectCost = project?.details?.total_project_cost ? getCommitmentAmount(project.details?.total_project_cost) : 'N/A';
    return (
        // <Spin spinning={loading}>
        <section className="mapPopup">
            <div className="popupHeader"><h2>{project?.name}</h2></div>
            <div className="projectDetail">
                <Row className="timeFrame">
                    <Col span={12} >
                        <h4>Project</h4>
                        <p>{project ? project?.code : 'N/A'}</p>
                    </Col>
                    <Col span={12}  >
                        <h4>Issues</h4>
                        <p>2</p>
                    </Col>
                    <Col span={12} >
                        <h4>Start Date</h4>
                        <p>{project?.details ? isoDateToHumanReadableDate(project?.details?.approval_date) : 'N/A'}</p>
                    </Col>
                    <Col span={12} >
                        <h4>End Date</h4>
                        <p>{project?.details ? isoDateToHumanReadableDate(project?.details?.closing_date) : 'N/A'}</p>
                    </Col>
                    <Col span={12} >
                        <h4>Physical Progess </h4>
                        <p>30%</p>
                    </Col>
                    <Col span={12} >
                        <h4>Financial Progress</h4>
                        <p>59%</p>
                    </Col>
                </Row>
                <span>
                    <h4>Sub Project Item(s)</h4>
                    <p>{project?.details ? project?.details?.implementing_agency?.name : 'N/A'}</p>
                </span>
                <span>
                    <h4>Procuring Entities</h4>
                    <p>N/A</p>
                </span>
                <span>
                    <h4>Location</h4>
                    <p>{commitmentAmount}</p>
                </span>
                <span>
                    <h4>Last updated</h4>
                    <p>{project?.details ? isoDateToHumanReadableDate(project?.details?.closing_date) : 'N/A'}</p>
                </span>
            </div>
            <span style={{ margin: 15, textDecoration: "underline" }}>
                <Link to={{
                    pathname: `/app/sub_projects/${project?.id}`,
                }}>More details</Link> </span>
            <div style={{ borderTop: '0.8px solid grey', padding: '10px 10px 0 10px', marginTop:'10px' }}>
                <Row>
                    <Col span={12} style={{ display: 'flex', justifyContent: 'space-around', borderRight: '0.8px solid grey' }}>
                        <PictureOutlined style={{ fontSize: '200%'}} />
                        <h3>Add Image</h3>
                    </Col>
                    <Col span={12} style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <FileOutlined style={{ fontSize: '200%'}}/>
                        <h3>Log Report</h3>
                    </Col>
                </Row>
            </div>
        </section>
        // </Spin>
    )
}

export default SubProjectPopupDetail;

SubProjectPopupDetail.propTypes = {
    project: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired
}
