import {Col, Row, Spin} from "antd";
import React from "react";
import ProjectsProgress from "../../../../../Projects/components/ProjectsDetails/Progress";
import BaseMap from "../../../../../Map/components/BaseMap";
import SubProjectPoints from "../../../../../Map/components/SubProjectPoints";
import ReportOverview from "../ReportOverview";
import {isoDateToHumanReadableDate} from "../../../../../../Util";

const keyDetailSpan = {xxl: 6, xl: 6, lg: 6, md: 6, sm: 12, xs: 12};
const firstSpan = { xxl: 12, xl: 12, lg: 12, md: 12, sm: 24, xs: 24 };
const secondSpan = { xxl: 11, xl: 11, lg: 11, md: 11, sm: 24, xs: 24 };

const KeyDetailSection = ({sub_project, mapLoading }) => {
    const approval_date = sub_project?.details ? isoDateToHumanReadableDate(sub_project?.details?.approval_date) : 'N/A';
    const closing_date = sub_project?.details ? isoDateToHumanReadableDate(sub_project?.details?.closing_date) : 'N/A';
    return (
        <>
            <div className="keyDetails ">
                <h2 id="sider-title">Key Details</h2>
                <section className="container">
                    <Row className="key-details">
                        <Col {...keyDetailSpan}>
                            <h4>Project</h4>
                            <p>{sub_project ? sub_project?.project_id : 'N/A'}</p>
                        </Col>
                        <Col {...keyDetailSpan}>
                            <h4>Sub Project Type</h4>
                            <p>{sub_project ? sub_project?.type?.name : 'N/A'}</p>
                        </Col>
                        <Col {...keyDetailSpan}>
                            <h4>Component</h4>
                            <p>{sub_project ? sub_project?.status?.name : 'N/A'}</p>
                        </Col>
                        <Col {...keyDetailSpan}>
                            <h4>Sub-Component</h4>
                            <p>{sub_project ? sub_project?.type?.name : 'N/A'}</p>
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
                            {sub_project?.districts ? sub_project?.districts.map(({name}) => <p>{name}</p>) : 'N/A'}
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
            </div>
            <Row className="Progress-overview container">
                <Col {...firstSpan} >
                    <ProjectsProgress
                        title="Financial Progress"
                        percentage={75}
                        trailColor="#888b8d"
                        start_value="0%"
                        progress_final_title="Disbursment gap"
                        progress_initial_title="Total Disbursed"
                        progress_final_value="36%"
                    />
                    <ProjectsProgress
                        title="Physical Progress"
                        percentage={45}
                        trailColor="#888b8d"
                        progress_final_title="Closing date"
                        progress_initial_title="Approval Date"
                        progress__initial_value={approval_date}
                        progress_final_value={closing_date}
                    />
                </Col>
                <Col {...secondSpan} offset={1}>
                    <Spin spinning={mapLoading} tip="Loading data...">
                        <h5>Sub Project Location</h5>
                        <div className="project_map">
                            <BaseMap zoomControl={true}>
                                <SubProjectPoints subProjects={[sub_project]}/>
                            </BaseMap>
                        </div>

                    </Spin>
                </Col>
                <Col {...firstSpan} className="reportOverview">
                    <ReportOverview/>
                </Col>
            </Row>
        </>

    )
}

export default KeyDetailSection;
