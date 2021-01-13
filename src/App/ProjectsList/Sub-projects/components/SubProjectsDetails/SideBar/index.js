import React from "react";
import { Col, Row, } from 'antd';

const SidebarSection = ({ sub_project }) => {

    return (
        <div>
            <span >
                <h4>Project Id </h4>
                <p>{sub_project ? sub_project?.project_id : 'N/A'}</p>                                                                                                                                                                                                                                                                                                       {/* <p>{sub_project.id}</p> */}
            </span>
            <span >
                <h4>Phase of the sub_project</h4>
                <p>{sub_project?.details ? sub_project?.details.phase.name : 'N/A'}</p>
            </span>

            <span >
                <h4>Supervision Agency</h4>
                <p>{sub_project?.details ? sub_project?.details.supervising_agency.name : "N/A"}</p>                                                                                                                                                                                                                                                                                                       {/* <p>{sub_project.id}</p> */}
            </span>

            <span >
                <h4>Contractors</h4>
                <p>{sub_project?.details ? sub_project?.details.contractor.name : "N/A"}</p>
            </span>
            <span >
                <h4>Actor(LGA)</h4>
                <p>{sub_project?.details ? sub_project?.details.actor.name : "N/A"}</p>
            </span>
            <span >
                <h4>Sub project locations</h4>
                {sub_project?.sub_project_locations ? sub_project?.sub_project_locations.map(location => {
                    if (location.level === 'region') {
                        return (
                            <p>-{location.region.name},{location.district.name}</p>
                        )
                    }
                    else {
                        return <p> - {location.district.name}</p>

                    }

                }) : 'N/A'}
            </span>
            <span >
                <h4>Human Resource</h4>
                {
                    sub_project?.human_resources ? 
                    sub_project?.human_resources.map(({name}) => <p>{name}</p>) : 'N/A'
                }              </span>
            <span >
                <h4>Sub project milestones</h4>
                {
                    sub_project?.sub_project_milestones ? 
                    sub_project?.sub_project_milestones.map(({name}) => <p> - {name}</p>) : 'N/A'
                }           
            </span>
            <div>
            <span style={{textAlign:"left"}}>Sub Project Progess</span>
            <Row gutter={[16, 24]} >
                <Col className="gutter-row" span={4}>
                    <h4>Planned </h4>
                    <p>{sub_project?.sub_project_progress? sub_project?.sub_project_progress?.planned: 'N/A'}</p>
                </Col>
                <Col className="gutter-row" span={4}>
                    <h4>Actual</h4>
                    <p>{sub_project?.sub_project_progress? sub_project?.sub_project_progress?.actual: "N/A" }</p>
                </Col>
                <Col className="gutter-row" span={4}>
                    <h4>Ahead</h4>
                    <p>{sub_project?.sub_project_progress? sub_project?.sub_project_progress?.ahead : 'N/A'}</p>
                </Col>
                <Col className="gutter-row" span={4}>
                    <h4>Behind</h4>
                    <p>{sub_project?.sub_project_progress ? sub_project?.sub_project_progress.behind : 'N/A'}</p>
                </Col>
                <Col span={24}><h4>Description</h4>
                    <p>{sub_project ? sub_project?.description : 'N/A'}</p>
                </Col>
            </Row>
        </div>
        </div>

    )
}

export default SidebarSection;